<template>
  <div v-if="service">
    <!-- Service Hero Banner -->
    <ServiceHeroBanner
      :category="service.category"
      :title="service.title"
      :subtitle="service.meta"
    />

    <!-- Main Content and Sidebar Grid -->
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Main Content Column (Col Span 8) -->
      <div class="lg:col-span-8">
        <ServiceContent :service="service" />
      </div>

      <!-- Sidebar Column (Col Span 4) -->
      <aside class="lg:col-span-4 space-y-6">
        <ServiceSidebar
          :current-service-id="serviceId"
          :services="servicesData"
        />
      </aside>
    </div>

    <!-- Trust & Metric Info Section -->
    <section class="bg-primary text-white py-12 border-t border-white/5 relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-left">
          <h3 class="text-xl md:text-2xl font-bold font-display">Trazabilidad garantizada con <span class="text-cyan">AUVO</span></h3>
          <p class="mt-2 text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
            Cada servicio técnico realizado en terreno se registra de manera digital, permitiendo a la administración descargar reportes detallados y registros fotográficos al instante.
          </p>
        </div>
        <div class="flex items-center gap-6">
          <img src="/images/Auvo_tecnologia.png" alt="Auvo Logo" class="h-16 w-auto object-contain bg-white/5 p-3 rounded-2xl border border-white/10" />
          <div class="text-left">
            <span class="block text-2xl font-display font-extrabold text-secondary-light">{{ service.metric.num }}</span>
            <span class="block text-xs text-slate-400 font-bold uppercase tracking-wider">{{ service.metric.lbl }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from '#app'
import { useServicesData } from '../../composables/useServicesData'
import ServiceHeroBanner from '../../components/servicio/ServiceHeroBanner.vue'
import ServiceContent from '../../components/servicio/ServiceContent.vue'
import ServiceSidebar from '../../components/servicio/ServiceSidebar.vue'

const route = useRoute()
const router = useRouter()
const { servicesData } = useServicesData()

const serviceId = computed(() => {
  const id = route.params.id as string
  return id in servicesData ? id : 'mantenimiento'
})

const service = computed(() => {
  return servicesData[serviceId.value as keyof typeof servicesData]
})

// Set Dynamic SEO details
useSeoMeta({
  title: () => service.value?.seoTitle || 'Servicios Especializados | MYT Ascensores',
  description: () => service.value?.meta || 'Detalle del servicio de transporte vertical en MYT Ascensores. Asistencia técnica certificada por el MINVU.'
})
</script>
