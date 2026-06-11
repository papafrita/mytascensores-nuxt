<template>
  <section id="proceso" class="bg-white py-14 lg:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan text-sm tracking-wider uppercase mb-2">
          <Workflow class="h-4 w-4" /> Nuestro proceso
        </span>
        <h2 class="text-3xl font-extrabold md:text-5xl font-display text-navy leading-tight">
          Cómo <span class="text-cyan">trabajamos</span>
        </h2>
        <p class="mt-4 text-base text-slate-600">
          Metodología ordenada y digitalizada para asegurar que cada visita técnica y proyecto cumpla con los estándares más estrictos.
        </p>
      </div>

      <!-- 2-Column Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Image with Stat Overlays -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden shadow-premium">
            <img src="/images/misc/building.webp" alt="Proceso de trabajo" width="854" height="518" loading="lazy" decoding="async" class="w-full h-auto object-cover min-h-[400px]" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
          </div>
          
          <!-- Stat 1 Overlay -->
          <div class="absolute -top-6 -left-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-premium flex items-center gap-4 transition-transform hover:scale-105 duration-300">
            <span class="rounded-xl bg-cyan/10 text-cyan p-3 flex items-center justify-center">
              <CheckSquare class="h-6 w-6" />
            </span>
            <div>
              <span class="block text-xl font-extrabold font-display text-navy leading-none">+450</span>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">Equipos activos</span>
            </div>
          </div>

          <!-- Stat 2 Overlay -->
          <div class="absolute -bottom-6 -right-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-premium flex items-center gap-4 transition-transform hover:scale-105 duration-300">
            <span class="rounded-xl bg-primary/10 text-primary p-3 flex items-center justify-center">
              <Wrench class="h-6 w-6 text-primary" />
            </span>
            <div>
              <span class="block text-xl font-extrabold font-display text-primary leading-none">+600</span>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">Servicios al mes</span>
            </div>
          </div>
        </div>

        <!-- Right: Steps -->
        <div class="lg:col-span-7 space-y-6 relative">
          <div 
            v-for="(step, index) in steps" 
            :key="step.phase"
            class="relative pl-10 md:pl-12 group/step flex items-start gap-4"
          >
            <!-- Connecting line for mobile/desktop layout (we can style using step-line or absolute div) -->
            <div 
              v-if="index < steps.length - 1" 
              class="absolute left-5 md:left-6 top-11 bottom-0 w-0.5 border-l-2 border-dashed border-slate-200"
            ></div>

            <!-- Step Number Icon -->
            <span class="absolute left-1 md:left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-xs font-bold text-slate-500 group-hover/step:border-cyan group-hover/step:text-cyan transition-colors z-10 shadow-sm">
              {{ index + 1 }}
            </span>

            <!-- Content Card -->
            <div class="bg-surface rounded-xl p-4 border border-transparent hover:border-cyan/30 hover:bg-white hover:shadow-premium transition-all duration-300 w-full flex gap-4">
              <span class="rounded-lg bg-white p-2.5 shadow-sm text-cyan flex items-center justify-center h-10 w-10 border border-slate-100">
                <component :is="step.icon" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="text-base md:text-lg font-bold text-navy mt-0.5 transition-colors group-hover/step:text-cyan">
                  <span class="text-cyan font-semibold mr-1.5">{{ step.phase }}:</span>{{ step.title }}
                </h3>
                <p class="mt-1 text-xs md:text-sm text-slate-500 leading-relaxed">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { 
  Workflow,
  CheckSquare, 
  Wrench,
  FileSearch, 
  ClipboardCheck, 
  FileCheck,
  FileText
} from 'lucide-vue-next'

const steps = [
  {
    phase: 'Paso 1',
    title: 'Evaluamos la necesidad',
    desc: 'Realizamos un diagnóstico integral del estado de tus equipos y/o analizamos tus planos en obra.',
    icon: markRaw(FileSearch)
  },
  {
    phase: 'Paso 2',
    title: 'Proponemos la solución',
    desc: 'Diseñamos un plan de mantención o propuesta de reparación a la medida de tu presupuesto.',
    icon: markRaw(ClipboardCheck)
  },
  {
    phase: 'Paso 3',
    title: 'Ejecutamos y damos seguimiento',
    desc: 'Nuestro equipo certificado ejecuta las obras e ingresamos los reportes a la plataforma digital para tu tranquilidad.',
    icon: markRaw(FileCheck)
  },
  {
    phase: 'Paso 4',
    title: 'Informe técnico',
    desc: 'Entregamos un informe técnico detallado de los trabajos realizados.',
    icon: markRaw(FileText)
  }
]
</script>
