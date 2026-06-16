<template>
  <footer class="bg-primary text-white py-8 border-t border-white/5 relative overflow-hidden">
    <!-- Subtle element -->
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6">
        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <NuxtLink to="/" class="inline-block flex-shrink-0">
            <img src="/images/logo-blanco.png" alt="MYT Ascensores" width="248" height="157" loading="lazy" decoding="async" class="h-[86px] md:h-[130px] w-auto object-contain" />
          </NuxtLink>
          <div class="max-w-md md:border-l md:border-white/10 md:pl-6">
            <p class="text-slate-400 leading-relaxed font-light text-xs md:text-sm">
              Empresa especializada en mantención, reparación e instalación de ascensores en Chile. Servicio técnico certificado MINVU.
            </p>
            <div class="mt-3 flex items-center gap-2 text-xs md:text-sm">
              <AlertTriangle class="h-4 w-4 text-red-400 animate-pulse" />
              <span class="text-slate-400 font-semibold">Emergencias:</span>
              <a href="tel:+56931831327" class="inline-flex items-center gap-1.5 text-secondary hover:text-white transition-colors font-bold">
                <Phone class="h-4 w-4 text-red-400" />
                +56 9 3183 1327
              </a>
            </div>
          </div>
        </div>
        <nav aria-label="Enlaces del sitio" class="flex flex-wrap gap-x-5 gap-y-2 text-slate-400 font-semibold text-xs md:text-sm lg:flex-nowrap whitespace-nowrap">
          <NuxtLink class="hover:text-secondary transition-colors" to="/">Inicio</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/nosotros">Nosotros</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#servicios">Servicios</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#proceso">Proceso</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#preguntas">Preguntas Frecuentes</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#contacto">Contacto</NuxtLink>
        </nav>
      </div>
      
      <div class="mt-6 flex flex-col gap-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 MYT Ascensores. Todos los derechos reservados.</p>
        <div class="flex gap-4">
          <a href="https://facebook.com/mytascensores" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-secondary transition-colors p-1 flex items-center justify-center h-7 w-7" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook']" class="text-lg" />
          </a>
          <a href="https://www.instagram.com/mytascensores/" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-secondary transition-colors p-1 flex items-center justify-center h-7 w-7" aria-label="Instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg" />
          </a>
          <a href="https://www.youtube.com/@mytascensores-zl2pt" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-secondary transition-colors p-1 flex items-center justify-center h-7 w-7" aria-label="YouTube">
            <font-awesome-icon :icon="['fab', 'youtube']" class="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, AlertTriangle } from 'lucide-vue-next'
// Main website footer component
</script>
