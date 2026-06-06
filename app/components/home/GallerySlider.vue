<template>
  <div 
    class="relative select-none group"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slider Viewport -->
    <div class="overflow-hidden rounded-2xl">
      <div 
        class="flex transition-transform duration-500 ease-out" 
        :style="transformStyle"
      >
        <div 
          v-for="(img, idx) in images" 
          :key="img.src"
          class="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 px-3"
        >
          <!-- Image Slide Card -->
          <div 
            @click="$emit('open-lightbox', idx)"
            class="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group/slide shadow-sm hover:shadow-premium border border-slate-100 hover:border-cyan/30 transition-all duration-300 bg-slate-900"
          >
            <img 
              :src="img.src" 
              :alt="img.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-110 opacity-90 group-hover/slide:opacity-100" 
            />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-navy/60 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <span class="self-end rounded-lg bg-cyan/90 backdrop-blur-sm p-1.5 flex items-center justify-center text-white text-xs font-semibold shadow-md">
                <Maximize2 class="h-4 w-4" />
              </span>
              <div>
                <span class="text-[9px] font-extrabold uppercase tracking-wider text-cyan">Galería MYT</span>
                <p class="text-xs font-bold leading-snug mt-1 line-clamp-2">
                  {{ img.title }}
                </p>
                <span class="text-[10px] text-cyan/90 font-semibold mt-1 inline-flex items-center gap-1">
                  Ampliar imagen <ArrowUpRight class="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows (visible on hover) -->
    <button 
      @click="prev" 
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-cyan hover:text-white text-navy h-12 w-12 rounded-full shadow-premium border border-slate-100 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 z-10"
      aria-label="Anterior"
    >
      <ChevronLeft class="h-6 w-6" />
    </button>
    <button 
      @click="next" 
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-cyan hover:text-white text-navy h-12 w-12 rounded-full shadow-premium border border-slate-100 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 z-10"
      aria-label="Siguiente"
    >
      <ChevronRight class="h-6 w-6" />
    </button>

    <!-- Dot Indicators -->
    <div class="flex justify-center gap-2 mt-6">
      <button 
        v-for="n in maxIndex + 1" 
        :key="n"
        @click="currentIndex = n - 1"
        :class="[
          'h-2.5 rounded-full transition-all duration-300',
          currentIndex === n - 1 ? 'w-6 bg-cyan' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
        ]"
        :aria-label="`Ir a diapositiva ${n}`"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Maximize2, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineEmits(['open-lightbox'])

const images = [
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM.jpeg', title: 'Inspección Técnica de Cabina y Sistemas' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (1).jpeg', title: 'Mantenimiento Preventivo de Poleas y Tracción' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (2).jpeg', title: 'Modernización de Equipos y Tableros de Control' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (3).jpeg', title: 'Servicio Técnico Especializado Multimarca' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (4).jpeg', title: 'Instalación y Ajuste de Sistemas de Seguridad' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM.jpeg', title: 'Inspección de Motores y Limitadores de Velocidad' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM (1).jpeg', title: 'Calibración de Sensores e Indicadores Digitales' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM (2).jpeg', title: 'Control de Calidad y Entrega de Proyectos' }
]

const currentIndex = ref(0)
const visibleSlides = ref(4)
let autoplayInterval: NodeJS.Timeout | null = null

const maxIndex = computed(() => {
  return Math.max(0, images.length - visibleSlides.value)
})

const transformStyle = computed(() => {
  const percentage = currentIndex.value * (100 / visibleSlides.value)
  return {
    transform: `translateX(-${percentage}%)`
  }
})

const updateVisibleSlides = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      visibleSlides.value = 1
    } else if (window.innerWidth < 768) {
      visibleSlides.value = 2
    } else {
      visibleSlides.value = 4
    }
    // Safeguard index out of bounds
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value
    }
  }
}

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value
  }
}

const startAutoplay = () => {
  autoplayInterval = setInterval(next, 4500)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  updateVisibleSlides()
  window.addEventListener('resize', updateVisibleSlides)
  startAutoplay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleSlides)
  stopAutoplay()
})
</script>
