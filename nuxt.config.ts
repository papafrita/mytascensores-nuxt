// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_URL } from './app/utils/site'
import { LEGACY_SERVICE_PATHS, SERVICE_IDS } from './app/composables/useServicesData'

const servicePaths = SERVICE_IDS.map(id => `/servicios/${id}/`)
const legacyServicePaths = Object.keys(LEGACY_SERVICE_PATHS)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactFromName: process.env.CONTACT_FROM_NAME || 'MYT Ascensores',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL || 'contacto@mytascensores.cl',
    contactToEmail: process.env.CONTACT_TO_EMAIL || 'contacto@mytascensores.cl',
    public: {
      contactEndpoint: process.env.NUXT_PUBLIC_CONTACT_ENDPOINT || ''
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  site: {
    url: SITE_URL,
    name: 'MYT Ascensores',
    trailingSlash: true
  },

  sitemap: {
    urls: servicePaths,
    exclude: legacyServicePaths.flatMap(path => [path, `${path}/`])
  },

  routeRules: Object.fromEntries(
    Object.entries(LEGACY_SERVICE_PATHS).map(([from, id]) => [
      from,
      { redirect: { to: `/servicios/${id}/`, statusCode: 301 } }
    ])
  ),

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/nosotros/',
        '/servicios/',
        ...servicePaths,
        ...legacyServicePaths,
        '/sitemap.xml'
      ]
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es-CL', class: 'scroll-smooth' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@600;700;800&display=swap',
          media: 'print',
          onload: 'this.media=\'all\''
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        {
          name: 'description',
          content:
            'MYT Ascensores: mantención, reparación e instalación de ascensores en Chile. Servicio multimarca certificado MINVU.'
        },
        // Open Graph defaults
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MYT Ascensores' },
        { property: 'og:locale', content: 'es_CL' },
        { property: 'og:image', content: `${SITE_URL}/images/og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'MYT Ascensores — Soluciones de Transporte Vertical en Chile' },
        // Twitter Card defaults
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${SITE_URL}/images/og-image.png` },
        // Additional SEO meta
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'MYT Ascensores' },
        { name: 'geo.region', content: 'CL' },
        { name: 'geo.placename', content: 'Santiago, Chile' },
        { name: 'theme-color', content: '#1D3273' }
      ],
      title: 'MYT Ascensores | Soluciones avanzadas de transporte vertical'
    }
  },

  css: ['@/assets/css/main.css']
})
