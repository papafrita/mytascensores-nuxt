<template>
  <section id="auvo-portal" class="bg-surface px-6 py-10 lg:px-8">
    <div class="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-navy-dark via-navy to-ink text-white p-8 md:p-12 relative overflow-hidden shadow-premium flex flex-col lg:flex-row items-center justify-between gap-10">
      <!-- Background glowing accents -->
      <div class="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan/15 rounded-full blur-[80px] pointer-events-none"></div>
      <div class="absolute -right-10 -top-10 w-72 h-72 bg-tertiary/10 rounded-full blur-[80px] pointer-events-none"></div>

      <!-- Left Column: Content -->
      <div class="relative z-10 max-w-2xl text-left lg:w-1/2">
        <div class="mb-6">
          <img src="/images/Auvo_tecnologia.png" alt="Auvo Logo" class="h-24 md:h-28 w-auto object-contain" />
        </div>
        
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-cyan">Trazabilidad de Servicio Integrada</span>
        </div>
        
        <h3 class="text-2xl font-extrabold md:text-3xl font-display leading-snug">
          Reportes Técnicos 100% <span class="text-cyan">Digitales</span>
        </h3>
        
        <p class="mt-3 text-sm md:text-base text-slate-300 font-light leading-relaxed">
          Toda nuestra asistencia e inspecciones preventivas se registran digitalmente en la plataforma AUVO. Accede de inmediato a hojas de control, reportes fotográficos de terreno y firmas digitales para una transparencia absoluta.
        </p>

        <div class="mt-6 flex flex-wrap gap-4 items-center">
          <a 
            href="https://www.auvo.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-cyan-light transition-colors group"
          >
            Visitar sitio oficial de AUVO
            <ExternalLink class="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <!-- Right Column: Larger Live service preview (app mockup) -->
      <div class="relative z-10 lg:w-1/2 flex justify-center lg:justify-end w-full">
        <div class="relative w-full max-w-[360px] rounded-3xl bg-slate-900 p-[3px] shadow-2xl border border-white/10 overflow-hidden group">
          <div class="relative rounded-[21px] overflow-hidden bg-slate-950">
            <img 
              src="/images/misc/auvo-mockup.png" 
              alt="AUVO Client App" 
              class="w-full h-auto object-cover max-h-[440px] object-top"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4 text-center">
              <span class="text-[10px] font-bold uppercase tracking-widest text-cyan flex items-center justify-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-cyan animate-pulse"></span>
                Visualización en vivo
              </span>
            </div>
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
/* Scoped adjustments if any needed */
</style>
