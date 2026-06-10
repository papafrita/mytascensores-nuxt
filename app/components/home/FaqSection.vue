<template>
  <section id="preguntas" class="bg-surface py-14 lg:py-16">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.72fr_1.15fr] lg:px-8">
      <!-- Left Column: Title & Direct Contact -->
      <div>
        <p class="inline-flex items-center gap-2 font-bold text-slate-400">
          <Settings class="h-5 w-5" /> Preguntas frecuentes
        </p>
        <h2 class="mt-6 text-4xl font-extrabold md:text-5xl font-display text-navy">
          <span class="text-cyan">Resolvemos</span> tus dudas
        </h2>
        <p class="mt-5 text-lg leading-8 text-slate-600">
          Respondemos algunas consultas habituales sobre nuestros servicios, el proceso de atención y la forma de solicitar una evaluación o cotización.
        </p>
        
        <!-- Contact Card -->
        <div class="mt-12 rounded-xl bg-white p-8 shadow-premium border border-slate-100">
          <h3 class="flex items-center gap-4 text-2xl font-extrabold font-display text-navy">
            <HelpCircle class="h-7 w-7 text-cyan" /> ¿Necesitas ayuda directa?
          </h3>
          <p class="mt-5 text-lg text-slate-600 leading-relaxed">
            Si necesitas más información, llámanos y te ayudaremos con tu requerimiento.
          </p>
          
          <div class="mt-8 grid gap-6 sm:grid-cols-2">
            <a 
              href="tel:+56931831327" 
              class="rounded-xl bg-cyan p-5 font-semibold text-white shadow-md hover:bg-cyan-dark transition-all transform hover:-translate-y-0.5 flex flex-col justify-between min-h-[140px]"
            >
              <AlertTriangle class="h-8 w-8 text-white animate-pulse" />
              <div>
                <span class="text-xs text-white/80 block">Emergencias</span>
                <span class="mt-2 block text-sm sm:text-base font-bold whitespace-nowrap tracking-tight">
                  +56 9 3183 1327
                </span>
              </div>
            </a>
            
            <a 
              href="tel:+56323536728" 
              class="rounded-xl border border-slate-200 p-5 font-semibold text-navy hover:bg-slate-50 transition-all transform hover:-translate-y-0.5 flex flex-col justify-between min-h-[140px]"
            >
              <Headphones class="h-8 w-8 text-cyan" />
              <div>
                <span class="text-xs text-slate-500 block">Ventas</span>
                <span class="mt-2 block text-sm sm:text-base font-bold whitespace-nowrap tracking-tight">
                  +56 32 353 6728
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: FAQ Accordion -->
      <div class="space-y-4 my-auto">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          :class="[
            'faq-item rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300',
            activeIndex === index ? 'is-open border-cyan shadow-[0_10px_30px_rgba(29,50,115,0.04)] bg-white' : 'hover:border-slate-200'
          ]"
        >
          <!-- Toggle Button -->
          <button 
            @click="toggleFaq(index)"
            class="faq-toggle w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-navy hover:text-cyan transition-colors"
            :aria-expanded="activeIndex === index ? 'true' : 'false'"
          >
            <span class="text-base md:text-lg leading-snug font-display font-bold">{{ faq.question }}</span>
            <ChevronDown 
              :class="[
                'faq-icon h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0',
                activeIndex === index ? 'rotate-180 text-cyan' : ''
              ]"
            />
          </button>

          <!-- Accordion Answer Area (grid animation) -->
          <div 
            class="faq-answer grid transition-[grid-template-rows] duration-300 ease-in-out"
            :style="{ gridTemplateRows: activeIndex === index ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <div class="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-50">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Settings, HelpCircle, AlertTriangle, Headphones, ChevronDown } from 'lucide-vue-next'

const activeIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: '¿Qué tipos de ascensores mantienen?',
    answer: 'Somos una empresa multimarca que realiza pautas de mantenimiento técnico predictivo y preventivo para ascensores de pasajeros, montacargas, escaleras mecánicas y rampas de todas las marcas del mercado, incluyendo Schindler, Otis, thyssenkrupp, Mitsubishi, KONE, entre otras.'
  },
  {
    question: '¿Están certificados por el MINVU?',
    answer: 'Sí. MYT Ascensores se encuentra formalmente inscrita bajo el Rol N°256, Resolución N°1452 en el Registro Nacional de Proveedores Técnicos del Ministerio de Vivienda y Urbanismo, habilitándonos para la mantención periódica exigida por ley.'
  },
  {
    question: '¿Ofrecen atención de emergencias?',
    answer: 'Contamos con un servicio de emergencias permanente las 24 horas del día, los 365 días del año. Ante fallas críticas o personas atrapadas en cabina, despachamos de inmediato cuadrillas técnicas altamente especializadas.'
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer: 'Puedes completar el formulario de contacto de esta web indicando tu requerimiento, escribirnos al WhatsApp, o llamarnos directamente. Coordinaremos una inspección técnica previa sin costo.'
  },
  {
    question: '¿Qué incluye la mantención preventiva?',
    answer: 'Cada visita mensual incluye la inspección detallada de más de 50 puntos de control mecánico y eléctrico, lubricación de componentes móviles, limpieza técnica de pozo/sala de máquinas y la emisión del reporte digital vía AUVO.'
  }
]
</script>

<style scoped>
/* FAQ animations are handled using standard Tailwind classes and gridTemplateRows style */
</style>
