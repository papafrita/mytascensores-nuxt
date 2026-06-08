<template>
  <footer class="bg-primary text-white py-12 border-t border-white/5 relative overflow-hidden">
    <!-- Subtle element -->
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-8">
        <div>
          <NuxtLink to="/" class="inline-block">
            <img src="/images/logo-blanco.png" alt="MYT Ascensores" class="h-24 w-auto md:h-28 object-contain" />
          </NuxtLink>
          <p class="mt-6 max-w-xl text-slate-400 leading-relaxed font-light text-sm">
            Empresa especializada en mantención, reparación e instalación de ascensores en Chile. Servicio técnico certificado MINVU.
          </p>
        </div>
        <nav aria-label="Enlaces del sitio" class="flex flex-wrap gap-9 text-slate-400 font-semibold text-sm">
          <NuxtLink class="hover:text-secondary transition-colors" to="/">Inicio</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/nosotros">Nosotros</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#servicios">Servicios</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#proceso">Proceso</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#preguntas">Preguntas Frecuentes</NuxtLink>
          <NuxtLink class="hover:text-secondary transition-colors" to="/#contacto">Contacto</NuxtLink>
        </nav>
      </div>
      
      <div class="mt-8 flex flex-col gap-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
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
// Main website footer component
</script>
