<template>
  <section id="auvo-portal" class="bg-gradient-to-r from-navy-dark via-navy to-ink text-white py-14 lg:py-16 relative overflow-hidden">
    <!-- Background glowing accents -->
    <div class="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan/15 rounded-full blur-[80px] pointer-events-none"></div>
    <div class="absolute -right-10 -top-10 w-72 h-72 bg-tertiary/10 rounded-full blur-[80px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
      <!-- Left Column: Content -->
      <div class="relative z-10 max-w-2xl text-left lg:w-1/2">
        <div class="mb-6">
          <a 
            href="https://www.auvo.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-block"
          >
            <img 
              src="/images/Auvo_tecnologia.png" 
              alt="Auvo Logo"
              width="1200"
              height="1200"
              loading="lazy"
              decoding="async"
              class="h-28 md:h-32 w-auto object-contain transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] cursor-pointer" 
            />
          </a>
        </div>
        
        <div class="flex items-center gap-2 mb-3">
          <span class="text-sm font-bold uppercase tracking-wider text-cyan">Trazabilidad de Servicio Integrada</span>
        </div>
        
        <h3 class="text-3xl font-extrabold md:text-4xl font-display leading-snug">
          Reportes Técnicos 100% <span class="text-cyan">Digitales</span>
        </h3>
        
        <p class="mt-4 text-base md:text-lg text-slate-300 font-light leading-relaxed">
          Toda nuestra asistencia e inspecciones preventivas se registran digitalmente en la plataforma AUVO. Accede de inmediato a hojas de control, reportes fotográficos de terreno y firmas digitales para una transparencia absoluta.
        </p>

        <div class="mt-6 flex flex-wrap gap-4 items-center">
          <a 
            href="https://www.auvo.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-2 text-base font-bold text-cyan hover:text-cyan-light transition-colors group"
          >
            Visitar sitio oficial de AUVO
            <ExternalLink class="h-5 w-5 transform group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <!-- Right Column: Larger Live service preview (app mockup) -->
      <div class="relative z-10 lg:w-1/2 flex justify-center lg:justify-end w-full">
        <div class="relative w-full max-w-[340px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:drop-shadow-[0_25px_50px_rgba(6,182,212,0.25)]">
          <img 
            src="/images/misc/auvo-mockup.webp" 
            alt="AUVO Client App"
            width="464"
            height="920"
            loading="lazy"
            decoding="async"
            class="w-full h-auto object-contain rounded-[44px] animate-float"
          />
          <div class="absolute bottom-5 left-0 right-0 flex justify-center">
            <span class="text-[11px] font-bold uppercase tracking-widest text-cyan bg-slate-950/85 px-4 py-2 rounded-full border border-white/15 flex items-center gap-2 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:border-cyan/40">
              <span class="h-2 w-2 rounded-full bg-cyan animate-pulse"></span>
              Visualización en vivo
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
