// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactReceiver: process.env.CONTACT_RECEIVER || 'tomaxio@gmail.com'
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  site: {
    url: 'https://mytascensores.cl',
    name: 'MYT Ascensores'
  },

  sitemap: {
    urls: [
      { loc: '/servicios/mantenimiento', changefreq: 'monthly', priority: 0.8 },
      { loc: '/servicios/reparacion', changefreq: 'monthly', priority: 0.8 },
      { loc: '/servicios/importacion', changefreq: 'monthly', priority: 0.8 },
      { loc: '/servicios/correctivo', changefreq: 'monthly', priority: 0.8 }
    ]
  },

  nitro: {
    prerender: {
      routes: [
        '/servicios/mantenimiento',
        '/servicios/reparacion',
        '/servicios/importacion',
        '/servicios/correctivo'
      ],
      autoSubfolderIndex: false
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es', class: 'scroll-smooth' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
        { property: 'og:image', content: 'https://mytascensores.cl/images/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'MYT Ascensores — Soluciones de Transporte Vertical en Chile' },
        // Twitter Card defaults
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://mytascensores.cl/images/og-image.png' },
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
