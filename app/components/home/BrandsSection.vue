<template>
  <section class="bg-primary py-12 md:py-16 text-white relative overflow-hidden">
    <!-- Subtle Glow Backgrounds -->
    <div class="absolute -top-24 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-24 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-3xl font-extrabold font-display text-white md:text-4xl">
          <span class="text-cyan">Equipos</span> con que trabajamos
        </h2>
        <p class="mt-4 text-base text-white/80">
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
          class="flex items-center justify-center p-6 bg-white rounded-xl border border-white/5 hover:border-cyan hover:shadow-premiumGlow hover:-translate-y-1 transition-all duration-300 h-28"
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
