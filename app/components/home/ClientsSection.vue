<template>
  <section class="bg-surface py-12 md:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-3xl font-extrabold font-display text-navy md:text-4xl">
          <span class="text-cyan">Clientes</span> satisfechos
        </h2>
        <p class="mt-4 text-base text-slate-600">
          Empresas y comunidades que han confiado en nuestro trabajo.
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <a 
          v-for="client in clients" 
          :key="client.name" 
          :href="client.href" 
          :target="client.href.startsWith('http') ? '_blank' : '_self'"
          :rel="client.href.startsWith('http') ? 'noopener noreferrer' : ''"
          class="flex items-center justify-center p-6 bg-white rounded-xl border border-slate-100 hover:border-cyan/30 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-28"
        >
          <img :src="client.logo" :alt="client.name" :width="client.width" :height="client.height" loading="lazy" decoding="async" class="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  { name: 'Codelco', logo: '/images/clients/logo-codelco.png', width: 800, height: 480, href: 'https://www.codelco.com/' },
  { name: 'Copec', logo: '/images/clients/logo-copec.png', width: 600, height: 600, href: 'https://www.copec.cl/' },
  { name: 'Mallplaza', logo: '/images/clients/logo-mallplaza.png', width: 960, height: 1090, href: 'https://www.mallplaza.com/' },
  { name: 'Smart Fit', logo: '/images/clients/logo-smartfit.png', width: 412, height: 480, href: 'https://www.smartfit.cl/' },
  { name: 'Ariztía', logo: '/images/clients/logo-ariztia.png', width: 296, height: 157, href: 'https://www.ariztia.cl/' },
  { name: 'Carabineros de Chile', logo: '/images/clients/logo-carabineros.webp', width: 960, height: 1078, href: 'https://www.carabineros.cl/' },
  { name: 'Comunidad Edificio', logo: '/images/clients/frame-88.png', width: 320, height: 120, href: '/#contacto' },
  { name: 'Administración Vertical', logo: '/images/clients/frame-89.png', width: 298, height: 120, href: '/#contacto' }
]
</script>
