<template>
  <section class="bg-surface py-12 md:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-3xl font-extrabold font-display text-navy md:text-4xl">
          <span class="text-cyan">Equipos</span> con que trabajamos
        </h2>
        <p class="mt-4 text-base text-slate-600">
          Tecnología de vanguardia y componentes de los principales fabricantes del mundo.
        </p>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <a 
          v-for="brand in brands" 
          :key="brand.name" 
          :href="brand.href" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center justify-center p-6 bg-white rounded-xl border border-slate-100 hover:border-cyan/30 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-28"
        >
          <img :src="brand.logo" :alt="brand.name" class="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brands = [
  { name: 'Schindler', logo: '/images/brands/schindler.png', href: 'https://www.schindler.cl/' },
  { name: 'Otis', logo: '/images/brands/otis.png', href: 'https://www.otis.com/es/cl/' },
  { name: 'thyssenkrupp', logo: '/images/brands/thyssenkrupp.png', href: 'https://www.tkelevator.com/cl-es/' },
  { name: 'KONE', logo: '/images/brands/kone.png', href: 'https://www.kone.cl/' },
  { name: 'Mitsubishi Electric', logo: '/images/brands/mitsubishi.png', href: 'https://www.mitsubishielectric.cl/' }
]
</script>
