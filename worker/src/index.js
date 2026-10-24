/**
 * MYT Ascensores — Contact endpoint (Cloudflare Worker).
 * Receives the contact form POST from the static site and forwards it to Resend.
 *
 * Env (set in wrangler.toml [vars] or via dashboard):
 *   CONTACT_FROM_NAME, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, CONTACT_ALLOWED_ORIGINS
 * Secret (set via `wrangler secret put RESEND_API_KEY`):
 *   RESEND_API_KEY
 */

function allowedOrigins(env) {
  return (env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function corsHeaders(env, origin) {
  const origins = allowedOrigins(env)
  return {
    'Access-Control-Allow-Origin': origins.includes(origin) ? origin : origins[0] || "''",
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin'
  }
}

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra }
  })
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const cors = corsHeaders(env, origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }
    if (request.method !== 'POST') {
      return json({ error: true, message: 'Method not allowed' }, 405, cors)
    }

    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: true, statusMessage: 'Cuerpo de la petición inválido.' }, 400, cors)
    }

    const { name, email, subject, message } = body || {}
    if (!name || !email || !subject || !message) {
      return json(
        { error: true, statusMessage: 'Faltan campos requeridos en el formulario.' },
        400,
        cors
      )
    }

    const apiKey = env.RESEND_API_KEY
    if (!apiKey) {
      return json(
        { error: true, statusMessage: 'El servicio de correo no está configurado.' },
        500,
        cors
      )
    }

    const fromName = env.CONTACT_FROM_NAME || 'MYT Ascensores'
    const fromEmail = env.CONTACT_FROM_EMAIL || 'contacto@mytascensores.cl'
    const to = (env.CONTACT_TO_EMAIL || 'contacto@mytascensores.cl').trim()

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: `${fromName} <${fromEmail}>`,
          to: [to],
          reply_to: email,
          subject: `Nueva Cotización: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
              <h2 style="color: #0d1b2a; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">Nuevo mensaje de contacto - MYT</h2>
              <div style="margin-top: 20px; margin-bottom: 25px;">
                <p><strong>Nombre completo:</strong> ${name}</p>
                <p><strong>Correo electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Asunto / Servicio:</strong> ${subject}</p>
              </div>
              <div style="background-color: #f8fafc; border-left: 4px solid #7c3aed; padding: 15px; border-radius: 4px; font-style: italic; color: #334155; margin-bottom: 25px;">
                ${String(message).replace(/\n/g, '<br>')}
              </div>
              <p style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center;">
                Este correo fue enviado desde el formulario de contacto de MYT Ascensores.
              </p>
            </div>
          `
        })
      })

      if (!response.ok) {
        let detail = response.statusText
        try {
          const errBody = await response.json()
          detail = (errBody && errBody.message) || detail
        } catch {}
        return json(
          { error: true, statusMessage: `Error al enviar el correo: ${detail}` },
          response.status,
          cors
        )
      }

      const data = await response.json().catch(() => ({}))
      return json(
        { success: true, message: 'Mensaje enviado correctamente.', id: data.id || null },
        200,
        cors
      )
    } catch (error) {
      return json(
        { error: true, statusMessage: `Error inesperado: ${error && error.message}` },
        500,
        cors
      )
    }
  }
}
