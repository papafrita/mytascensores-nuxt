import { defineEventHandler, readBody, createError } from 'h3'
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message } = body

  // Validation
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos requeridos en el formulario.'
    })
  }

  // Access runtime config (properly injected by Nuxt from .env)
  const config = useRuntimeConfig(event)
  const resendApiKey = config.resendApiKey as string
  const contactReceiver = (config.contactReceiver as string) || 'tomaxio@gmail.com'

  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not configured in .env')
    throw createError({
      statusCode: 500,
      statusMessage: 'El servicio de correo no está configurado. Falta la variable RESEND_API_KEY.'
    })
  }

  const resend = new Resend(resendApiKey)

  try {
    const { data, error } = await resend.emails.send({
      from: 'MYT Ascensores <onboarding@resend.dev>',
      to: [contactReceiver],
      replyTo: email,
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
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <p style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center;">
            Este correo fue enviado desde el formulario de contacto de MYT Ascensores.
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend API error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: `Error al enviar el correo: ${error.message}`
      })
    }

    console.log('Email sent successfully via Resend. ID:', data?.id)
    return { success: true, message: 'Mensaje enviado correctamente.' }
  } catch (error: any) {
    // Re-throw if already an h3 error
    if (error.statusCode) throw error

    console.error('Unexpected error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: `Error inesperado al enviar el correo: ${error.message || error}`
    })
  }
})
