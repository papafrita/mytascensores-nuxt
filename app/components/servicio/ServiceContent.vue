<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import type { ServiceData } from '~/composables/useServicesData'

defineProps<{
  service: ServiceData
}>()
</script>

<template>
  <div class="lg:col-span-8 fade-in">
    <!-- Large Featured Image -->
    <div class="relative rounded-2xl overflow-hidden shadow-premium border border-slate-100/80 mb-10 group max-h-[460px]">
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </div>

    <!-- Dynamic Overview Section -->
    <div class="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-slate-100/50 mb-8">
      <h2 class="text-2xl md:text-3xl font-extrabold font-display text-navy flex items-center gap-3">
        <span class="h-8 w-1 bg-cyan rounded-full" /> Descripción del Servicio
      </h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p
        class="mt-5 text-slate-600 leading-relaxed text-base md:text-lg font-normal"
        v-html="service.overview"
      />
    </div>

    <!-- Key Features/Benefits Section -->
    <div class="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-slate-100/50 mb-8">
      <h2 class="text-2xl md:text-3xl font-extrabold font-display text-navy flex items-center gap-3">
        <span class="h-8 w-1 bg-cyan rounded-full" /> Beneficios y Características Clave
      </h2>
      <p class="mt-2 text-sm text-slate-400 font-medium">
        Nuestros estándares y valor agregado en la ejecución:
      </p>
      <ul class="mt-6 space-y-4">
        <li
          v-for="(feat, idx) in service.detailedFeatures"
          :key="idx"
          class="flex items-start gap-3.5 p-4 rounded-2xl hover:bg-surface transition-colors duration-200"
        >
          <span class="flex-shrink-0 rounded-full bg-secondary/10 p-1.5 text-secondary-dark mt-0.5">
            <Check class="h-4 w-4" />
          </span>
          <div>
            <strong class="block text-slate-800 text-sm md:text-base font-bold">{{ feat.title }}</strong>
            <span class="block text-slate-500 text-xs md:text-sm mt-0.5 leading-relaxed">{{ feat.desc }}</span>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
