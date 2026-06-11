<template>
  <section id="servicios" class="bg-primary py-14 lg:py-16 text-white relative overflow-hidden">
    <!-- Background Glow Circles -->
    <div class="absolute -top-24 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-24 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="inline-flex items-center gap-2 font-display font-semibold text-secondary text-sm tracking-wider uppercase mb-2">
          <Wrench class="h-4 w-4" /> Servicios Especializados
        </span>
        <h2 class="text-3xl font-extrabold md:text-5xl font-display leading-tight text-white">
          <span class="text-cyan">Soluciones</span> para cada necesidad
        </h2>
        <p class="mt-4 text-base text-white/80 leading-relaxed">
          Ofrecemos cobertura técnica experta en todas las áreas de transporte vertical con procesos modernos y trazabilidad absoluta.
        </p>
      </div>

      <!-- Main Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Service Tabs (2x2 Grid) -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            v-for="(service, key) in servicesData"
            :key="key"
            @click="activeServiceKey = key"
            :class="[
              'w-full p-6 text-left rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[160px] relative overflow-hidden group shadow-sm',
              activeServiceKey === key
                ? 'border-secondary bg-white text-navy shadow-premiumGlow opacity-100 scale-[1.02]'
                : 'border-white/10 bg-primary-dark/40 text-white opacity-85 hover:opacity-100 hover:border-white/30'
            ]"
          >
            <!-- Hover element -->
            <div 
              class="absolute -right-10 -bottom-10 w-24 h-24 rounded-full blur-2xl transition-all duration-300"
              :class="activeServiceKey === key ? 'bg-secondary/10' : 'bg-white/5 group-hover:bg-white/10'"
            ></div>

            <!-- Header of tab button -->
            <div class="flex items-center justify-between w-full">
              <span 
                :class="[
                  'p-2.5 rounded-lg border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm',
                  activeServiceKey === key 
                    ? 'bg-secondary/15 text-secondary border-secondary/10' 
                    : 'bg-white/5 text-white/90 border-white/5'
                ]"
              >
                <component :is="getIconComponent(service.icon)" class="h-6 w-6" />
              </span>
              <span :class="['text-[10px] font-extrabold uppercase tracking-wider', activeServiceKey === key ? 'text-secondary-dark' : 'text-slate-400']">
                {{ service.category }}
              </span>
            </div>

            <!-- Footer of tab button -->
            <div class="mt-8 flex items-center justify-between w-full">
              <span class="font-display font-extrabold text-xl md:text-2xl leading-snug">
                {{ service.title }}
              </span>
              <ArrowRight 
                :class="[
                  'h-5 w-5 transition-transform duration-300',
                  activeServiceKey === key ? 'translate-x-1 text-secondary-dark' : 'group-hover:translate-x-1 text-white/60'
                ]" 
              />
            </div>
          </button>
        </div>

        <!-- Detail Card -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-premium text-ink flex flex-col h-full min-h-[460px] relative">
            <Transition name="fade" mode="out-in">
              <div :key="activeServiceKey" class="flex flex-col h-full flex-grow">
                <!-- Card Header -->
                <div class="bg-white px-6 py-6 text-navy flex items-center gap-4 relative border-b border-slate-100">
                  <span class="rounded-xl bg-secondary/15 border border-secondary/10 p-3 flex items-center justify-center text-secondary">
                    <component :is="getIconComponent(activeService.icon)" class="h-6 w-6" />
                  </span>
                  <div>
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-secondary-dark">
                      {{ activeService.category }}
                    </span>
                    <h3 class="font-display font-extrabold text-2xl md:text-3xl mt-0.5 leading-snug text-navy">
                      {{ activeService.title }}
                    </h3>
                  </div>
                </div>

                <!-- Card Body -->
                <div class="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {{ activeService.description }}
                    </p>
                    
                    <h4 class="text-xs font-bold uppercase tracking-wider text-navy mb-3">Qué incluye el servicio:</h4>
                    <ul class="space-y-3 mb-8">
                      <li 
                        v-for="feat in activeService.features" 
                        :key="feat"
                        class="flex items-center gap-3 text-sm text-slate-700 font-medium"
                      >
                        <span class="flex-shrink-0 rounded-full bg-secondary/10 p-1 text-secondary-dark flex items-center justify-center">
                          <Check class="h-3 w-3" />
                        </span>
                        <span>{{ feat }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Footer CTA and Metrics -->
                  <div>
                    <div class="border-t border-slate-100 pt-6 mt-auto">
                      <div class="grid grid-cols-3 gap-2 mb-6">
                        <div 
                          v-for="metric in activeService.metrics" 
                          :key="metric.lbl"
                          class="text-center p-3 bg-surface rounded-xl border border-slate-50"
                        >
                          <span class="block text-lg font-extrabold font-display text-navy leading-none">{{ metric.num }}</span>
                          <span class="text-[10px] font-bold text-slate-400 uppercase mt-1 block tracking-wider">{{ metric.lbl }}</span>
                        </div>
                      </div>
                      
                      <NuxtLink 
                        :to="`/servicios/${activeServiceKey}`"
                        class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-tertiary hover:bg-tertiary-dark text-white font-bold py-4 transition-all duration-300 shadow-md shadow-tertiary/15 text-sm"
                      >
                        Conocer detalles del servicio
                        <ArrowUpRight class="h-4.5 w-4.5" />
                      </NuxtLink>
                    </div>
                  </div>

                </div>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useServicesData } from '../../composables/useServicesData'
import { 
  Wrench,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck, 
  Cog, 
  Download, 
  ClipboardList 
} from 'lucide-vue-next'

const { servicesData } = useServicesData()
const activeServiceKey = ref<keyof typeof servicesData>('mantenimiento')

const activeService = computed(() => servicesData[activeServiceKey.value])

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'clipboard-check':
      return ClipboardCheck
    case 'cog':
      return Cog
    case 'download':
      return Download
    case 'clipboard-list':
      return ClipboardList
    default:
      return Wrench
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
