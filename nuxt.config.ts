// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: { lang: 'es', class: 'scroll-smooth' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap'
        }
      ],
      meta: [
        {
          name: 'description',
          content:
            'MYT Ascensores: mantención, reparación e instalación de ascensores en Chile. Servicio multimarca certificado MINVU.'
        }
      ],
      title: 'MYT Ascensores | Soluciones avanzadas de transporte vertical'
    }
  },

  css: ['@/assets/css/main.css']
})
