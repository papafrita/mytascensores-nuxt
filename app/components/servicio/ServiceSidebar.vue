<script setup lang="ts">
import {
  LayoutGrid,
  ClipboardCheck,
  Cog,
  Download,
  ClipboardList,
  ChevronRight,
  PhoneCall,
  AlertTriangle,
  Headphones,
  FileText,
  ArrowUpRight,
  CheckCircle
} from 'lucide-vue-next'
import type { ServiceData, ServiceId } from '~/composables/useServicesData'

const props = defineProps<{
  currentServiceId: string
  services: Record<string, ServiceData>
}>()

// Icon mapping for sidebar navigation
const serviceIcons: Record<string, ReturnType<typeof ClipboardCheck>> = {
  correctivo: ClipboardList,
  reparacion: Cog,
  importacion: Download
}

// Service navigation items
const serviceNavItems = computed(() =>
  Object.entries(props.services).map(([key, svc]) => ({
    key,
    title: svc.title,
    icon: serviceIcons[key]
  }))
)

// Navigate to service page
function goToService(key: string) {
  navigateTo(`/servicios/${key}`)
}

// Form state
const formName = ref('')
const formEmail = ref('')
const formService = ref('')
const formMessage = ref('')
const showSuccess = ref(false)

// Pre-select the form service based on current service
const serviceOptions = [
  { value: 'Mantenimiento Correctivo', label: 'Mantenimiento Correctivo' },
  { value: 'Reparación y Normalización', label: 'Reparación y Normalización' },
  { value: 'Importación e Instalación', label: 'Importación e Instalación' }
]

const serviceValueMap: Record<string, string> = {
  correctivo: 'Mantenimiento Correctivo',
  reparacion: 'Reparación y Normalización',
  importacion: 'Importación e Instalación'
}

// Set form service when current service changes
watch(
  () => props.currentServiceId,
  (newId) => {
    formService.value = serviceValueMap[newId] || serviceOptions[0].value
  },
  { immediate: true }
)

// Form submit handler
function handleSubmit() {
  showSuccess.value = true

  // Reset form
  formName.value = ''
  formEmail.value = ''
  formService.value = serviceValueMap[props.currentServiceId] || serviceOptions[0].value
  formMessage.value = ''

  // Auto-hide success message
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<template>
  <aside class="lg:col-span-4 space-y-8">
    <!-- Navigation Card: Nuestros Servicios -->
    <div class="bg-white rounded-3xl p-6 shadow-premium border border-slate-100/50">
      <h3 class="text-lg font-bold font-display text-navy border-b border-slate-100 pb-4 flex items-center gap-2">
        <LayoutGrid class="h-5 w-5 text-cyan" />
        Nuestros Servicios
      </h3>
      <div class="mt-4 space-y-2">
        <button
          v-for="item in serviceNavItems"
          :key="item.key"
          :class="[
            'w-full text-left p-3.5 rounded-xl border transition-all duration-300 group flex items-center justify-between min-h-[64px]',
            item.key === currentServiceId
              ? 'border-cyan/30 bg-cyan/5 shadow-premiumGlow'
              : 'border-slate-100 bg-white hover:border-slate-200'
          ]"
          @click="goToService(item.key)"
        >
          <div class="flex items-center gap-3">
            <span
              :class="[
                'rounded-lg p-2 flex items-center justify-center transition-all group-hover:scale-105',
                item.key === currentServiceId
                  ? 'bg-cyan/15 text-cyan-dark'
                  : 'bg-secondary/10 text-secondary-dark'
              ]"
            >
              <component :is="item.icon" class="h-5 w-5" />
            </span>
            <div>
              <h4
                :class="[
                  'font-bold text-sm sm:text-base leading-tight transition-colors',
                  item.key === currentServiceId ? 'text-cyan-dark' : 'text-navy'
                ]"
              >
                {{ item.title }}
              </h4>
            </div>
          </div>
          <ChevronRight
            :class="[
              'h-4 w-4 transition-colors',
              item.key === currentServiceId ? 'text-cyan' : 'text-slate-300 group-hover:text-cyan'
            ]"
          />
        </button>
      </div>
    </div>

    <!-- Quick Contacts Widget -->
    <div class="bg-primary rounded-3xl p-6 text-white shadow-premium border border-white/5 relative overflow-hidden group">
      <div class="absolute -right-10 -top-10 w-28 h-28 bg-purple/10 rounded-full blur-2xl pointer-events-none" />
      <h3 class="text-lg font-bold font-display flex items-center gap-2 border-b border-white/10 pb-4">
        <PhoneCall class="h-5 w-5 text-secondary" />
        ¿Necesitas ayuda directa?
      </h3>
      <p class="mt-4 text-sm text-white/80 leading-relaxed font-light">
        Nuestro equipo técnico e ingenieros están listos para responder tus dudas o asistir a emergencias.
      </p>
      <div class="mt-6 space-y-3">
        <a
          href="tel:+56931831327"
          class="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/20 p-4 transition-all duration-200 border border-white/10 group/item"
        >
          <span class="p-2 rounded-lg bg-red-500/20 text-red-400 group-hover/item:scale-105 transition-transform">
            <AlertTriangle class="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <span class="block text-[10px] uppercase font-bold text-slate-300 tracking-wider">Línea Emergencia 24/7</span>
            <span class="block text-sm font-bold tracking-tight">+56 9 3183 1327</span>
          </div>
        </a>
        <a
          href="tel:+56323536728"
          class="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 p-4 transition-all duration-200 border border-white/5 group/item"
        >
          <span class="p-2 rounded-lg bg-secondary/20 text-secondary group-hover/item:scale-105 transition-transform">
            <Headphones class="h-5 w-5" />
          </span>
          <div>
            <span class="block text-[10px] uppercase font-bold text-slate-300 tracking-wider">Ventas (Central)</span>
            <span class="block text-sm font-bold tracking-tight">+56 32 353 6728</span>
          </div>
        </a>
        <a
          href="tel:+56967579214"
          class="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 p-4 transition-all duration-200 border border-white/5 group/item"
        >
          <span class="p-2 rounded-lg bg-secondary/20 text-secondary group-hover/item:scale-105 transition-transform">
            <Headphones class="h-5 w-5" />
          </span>
          <div>
            <span class="block text-[10px] uppercase font-bold text-slate-300 tracking-wider">Ventas (Móvil)</span>
            <span class="block text-sm font-bold tracking-tight">+56 9 6757 9214</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Form: Solicitar Cotización -->
    <div id="cotizar" class="bg-white rounded-3xl p-6 shadow-premium border border-slate-100/50">
      <h3 class="text-lg font-bold font-display text-navy border-b border-slate-100 pb-4 flex items-center gap-2">
        <FileText class="h-5 w-5 text-cyan" />
        Cotizar este Servicio
      </h3>
      <form class="mt-5 space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="formNombre" class="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Nombre completo *
          </label>
          <input
            id="formNombre"
            v-model="formName"
            required
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <div>
          <label for="formEmail" class="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Correo electrónico *
          </label>
          <input
            id="formEmail"
            v-model="formEmail"
            required
            type="email"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            placeholder="juan@ejemplo.com"
          />
        </div>
        <div>
          <label for="formAsunto" class="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Servicio de interés *
          </label>
          <select
            id="formAsunto"
            v-model="formService"
            required
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 bg-white outline-none transition duration-200 focus:border-cyan focus:ring-4 focus:ring-cyan/10"
          >
            <option
              v-for="opt in serviceOptions"
              :key="opt.value"
              :value="opt.value"
            >
              {{ opt.label }}
            </option>
          </select>
        </div>
        <div>
          <label for="formMensaje" class="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Detalles adicionales *
          </label>
          <textarea
            id="formMensaje"
            v-model="formMessage"
            required
            rows="4"
            class="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            placeholder="Describe brevemente tus requerimientos o número de equipos..."
          />
        </div>

        <button
          type="submit"
          class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple hover:bg-purple-dark text-white font-bold py-4 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-purple/10 text-sm"
        >
          Enviar solicitud
          <ArrowUpRight class="h-4.5 w-4.5" />
        </button>

        <!-- Success feedback alert -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <div
            v-if="showSuccess"
            class="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 flex items-start gap-3"
          >
            <CheckCircle class="h-5.5 w-5.5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong class="block text-sm font-bold">¡Solicitud recibida!</strong>
              <span class="block text-xs mt-1 text-emerald-700/90">
                Te responderemos con tu cotización formal a la brevedad.
              </span>
            </div>
          </div>
        </Transition>
      </form>
    </div>
  </aside>
</template>
