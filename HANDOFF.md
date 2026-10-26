# Handoff — Formulario de contacto MYT Ascensores (sitio estático + Worker)

> Arquitectura final: el sitio se sirve como **archivos estáticos** en el servidor del colega, y el endpoint del formulario de contacto corre en un **Cloudflare Worker** independiente (desplegado por Tomás). El Worker llama a Resend y envía el correo.

## Por qué esta arquitectura
El formulario (`/#contacto`) necesita ejecutar código en el servidor (validar, llamar a Resend). Un servidor **solo estático** no puede correr ese código, por eso la API vive en un Worker externo. El sitio estático hace `POST` al Worker (con CORS restringido a `mytascensores.cl`).

- **From:** `MYT Ascensores <contacto@mytascensores.cl>`
- **To:** `contacto@mytascensores.cl`

---

## ENTREGABLES

### A) Para el colega (servidor estático / DNS)
1. **Servir la carpeta `.output/public`** como archivos estáticos (es el sitio completo, ya prerenderizado). Reemplaza la versión anterior.
2. **Agregar 3 registros DNS** para verificar el dominio en Resend (ver sección DNS).
3. No necesita configurar nada del backend del formulario: el Worker ya está desplegado por Tomás y es externo.

### Configuración del servidor (SEO)
Cada página se genera como carpeta con `index.html` (`/nosotros/index.html`, `/servicios/.../index.html`) y las URLs canónicas terminan en `/`. El servidor debe:
1. Servir `index.html` al pedir una carpeta (`/nosotros/`) y redirigir con **301** `/nosotros` → `/nosotros/` (nginx y Apache lo hacen por defecto con directorios).
2. Redirigir con **301** `http://` → `https://` y `www.mytascensores.cl` → `mytascensores.cl`.
3. Usar `404.html` como página de error y responder con código **404** real (no 200 ni 500).
4. Servir `sitemap.xml` como `application/xml` y `robots.txt` / `llms*.txt` como `text/plain; charset=utf-8`.
5. Las URLs antiguas `/servicios/correctivo`, `/servicios/reparacion` y `/servicios/importacion` ya incluyen una redirección HTML; si el servidor lo permite, conviene reemplazarlas por redirecciones **301** reales hacia `/servicios/mantencion-correctiva-de-ascensores/`, `/servicios/reparacion-y-normalizacion-de-ascensores/` y `/servicios/instalacion-de-ascensores/`.

### B) Para Tomás (desplegar el Worker)
Desde la raíz del proyecto:
```bash
cd worker
npx wrangler login                                  # solo la primera vez (abre navegador)
npx wrangler secret put RESEND_API_KEY              # pegar la key re_… cuando la pida
npx wrangler deploy                                 # imprime la URL  https://myt-contact.<subdomain>.workers.dev
```
- Las variables no secretas ya están en `worker/wrangler.toml` (`CONTACT_FROM_*`, `CONTACT_TO_EMAIL`, `CONTACT_ALLOWED_ORIGINS`). Revisar que los valores sean correctos.
- Anotar la URL `*.workers.dev` que devuelve `wrangler deploy` (se usa en el paso del build final).
- Si se cambia un `[vars]` de `wrangler.toml`, volver a correr `npx wrangler deploy` (los *secrets* persisten entre deploys).

---

## DNS — Verificar `mytascensores.cl` en Resend
Agregar estos 3 registros en el panel DNS del dominio:

| # | Tipo | Host (relativo) | Valor |
|---|------|-----------------|-------|
| 1 | TXT  | `resend._domainkey` | `v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCs8W1C1vsrQY34oUHQsZoIZ3MCDM7NV9YBlriwRIwdGDQrREZ2U77cAZo6eHGoRDUpOSCh5EP1sZL8AYPsZPhtoQBpRdWT4YoNoOluJidkMhVrU6md6Sc5GHXSSudHQ8SQtDM/h4xjoDlyqo4a/ymIBaY7MwuQhU51lDaK+6dz/wIDAQAB` |
| 2 | MX   | `send` | `feedback-smtp.sa-east-1.amazonses.com` (prioridad **10**) |
| 3 | TXT  | `send` | `v=spf1 include:amazonses.com ~all` |

**Notas:**
- Hosts **relativos**: si el proveedor agrega el dominio automáticamente (Cloudflare lo hace), ingresar tal cual `resend._domainkey` y `send`. Si no, usar el FQDN (`resend._domainkey.mytascensores.cl`, `send.mytascensores.cl`).
- TXT/MX en modo **DNS only** (nube gris), nunca proxied.
- **Copiar los valores exactos desde el dashboard de Resend** → *Domains* → `mytascensores.cl` (es lo más confiable, sobre todo el DKIM con su prefijo `v=DKIM1; `).
- Una vez agregados y propagados, Tomás hace clic en **Verify** en Resend → el estado pasa a `verified`.

---

## Build final del sitio (después de tener la URL del Worker)
El sitio estático debe tener la URL del Worker "horneada". Desde la raíz del proyecto:
```bash
# 1) poner la URL del Worker en .env
#    NUXT_PUBLIC_CONTACT_ENDPOINT=https://myt-contact.<subdomain>.workers.dev
# 2) regenerar el sitio estático
npm run generate
```
Esto produce `.output/public` con el endpoint correcto. **Esa** es la carpeta que se le entrega al colega.

> Si `NUXT_PUBLIC_CONTACT_ENDPOINT` queda vacío, el formulario haría POST a `/api/contact` (relativo) y fallaría en el servidor estático (404). Por eso es obligatorio setearla antes del build final.

---

## Orden de operaciones (mañana)
1. **Colega:** agregar los 3 registros DNS → **Tomás:** clic *Verify* en Resend → estado `verified`.
2. **Tomás:** desplegar el Worker (`wrangler deploy`) → copiar la URL `*.workers.dev`.
3. **Tomás:** setear `NUXT_PUBLIC_CONTACT_ENDPOINT` en `.env` → `npm run generate`.
4. **Colega:** servir la nueva carpeta `.output/public`.
5. **Probar** el formulario en `https://mytascensores.cl/#contacto` → llega correo a `contacto@mytascensores.cl`.

---

## Diagnóstico de errores
| Síntoma | Causa probable |
|---------|----------------|
| `"El servicio de correo no está configurado…"` (500) | Falta el secret `RESEND_API_KEY` en el Worker (`wrangler secret put`). |
| `403 Forbidden` / `"verify a domain"` | El dominio `mytascensores.cl` aún no está verificado en Resend. |
| `404` o `"Failed to fetch"` en el navegador | El sitio quedó con `NUXT_PUBLIC_CONTACT_ENDPOINT` vacío (regenerar tras setear la URL del Worker), o CORS: el origen no está en `CONTACT_ALLOWED_ORIGINS`. |
| `CORS` / bloqueado por el navegador | El Worker no devolvió `Access-Control-Allow-Origin` para ese host; verificar `CONTACT_ALLOWED_ORIGINS` en `wrangler.toml` y redeploy. |
| Correo llega sólo a una cuenta de prueba | `CONTACT_TO_EMAIL` apunta a otra dirección; dejarlo en `contacto@mytascensores.cl`. |

---

## Resumen de archivos relevantes
- `worker/wrangler.toml` + `worker/src/index.js` — el Worker (CORS + Resend).
- `.output/public/` — sitio estático a entregar al colega.
- `nuxt.config.ts` — `runtimeConfig.public.contactEndpoint` lee `NUXT_PUBLIC_CONTACT_ENDPOINT`.
- `app/components/home/ContactSection.vue` — hace POST a `contactEndpoint || '/api/contact'`.
- `server/api/contact.post.ts` — sólo se usa en **dev** local (`npm run dev`); no va al build estático.
