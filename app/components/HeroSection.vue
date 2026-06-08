<template>
  <section class="mx-auto max-w-7xl px-6 pt-8 pb-16 lg:px-8">
    <div 
      class="relative rounded-xl overflow-hidden shadow-premium bg-slate-900" 
      :style="{ minHeight: minHeight }"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <!-- Active Background Slide -->
      <transition name="hero-bg-fade" mode="out-in">
        <div
          :key="activeSlideIndex"
          role="img"
          :aria-label="computedSlides[activeSlideIndex].title"
          class="absolute inset-0 z-0 bg-cover bg-center animate-kenburns"
          :style="{ backgroundImage: `url(${computedSlides[activeSlideIndex].backgroundImage})` }"
        ></div>
      </transition>

      <!-- Hero Gradient Overlay -->
      <div class="absolute inset-0 hero-gradient-overlay z-10"></div>
      
      <!-- Carousel Content Container -->
      <div class="relative z-20 flex h-full items-center px-6 py-16 md:px-12 lg:px-20" :style="{ minHeight: minHeight }">
        <transition name="slide-fade" mode="out-in">
          <div :key="activeSlideIndex" class="max-w-3xl text-left my-auto">
            <span v-if="computedSlides[activeSlideIndex].tag" class="inline-flex items-center gap-2 font-display font-semibold text-secondary text-sm tracking-wider uppercase mb-3">
              <Info class="h-4 w-4" /> {{ computedSlides[activeSlideIndex].tag }}
            </span>
            
            <h1 class="text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl font-display">
              {{ computedSlides[activeSlideIndex].title }}
            </h1>
            
            <p class="mt-6 text-base md:text-lg leading-relaxed text-white/85 max-w-2xl font-light">
              {{ computedSlides[activeSlideIndex].subtitle }}
            </p>

            <!-- Badges list if any -->
            <div 
              v-if="computedSlides[activeSlideIndex].badges && computedSlides[activeSlideIndex].badges.length" 
              class="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              <div 
                v-for="badge in computedSlides[activeSlideIndex].badges" 
                :key="badge"
                class="flex items-center gap-2 text-sm text-white/90 font-medium"
              >
                <CheckCircle2 class="h-5 w-5 text-secondary flex-shrink-0" />
                <span>{{ badge }}</span>
              </div>
            </div>

            <!-- CTAs if any -->
            <div 
              v-if="computedSlides[activeSlideIndex].ctas && computedSlides[activeSlideIndex].ctas.length" 
              class="mt-10 flex flex-wrap gap-4"
            >
              <NuxtLink
                v-for="cta in computedSlides[activeSlideIndex].ctas"
                :key="cta.text"
                :to="cta.href"
                :class="[
                  'inline-flex items-center gap-2 rounded-xl font-bold px-7 py-4 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base shadow-lg',
                  cta.variant === 'primary' 
                    ? 'bg-tertiary hover:bg-tertiary-dark text-white shadow-tertiary/15' 
                    : 'border border-white/60 hover:bg-white hover:text-navy text-white'
                ]"
              >
                {{ cta.text }}
                <ArrowUpRight v-if="cta.variant === 'primary'" class="h-5 w-5" />
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>

      <!-- Navigation Arrows (only if multiple slides exist) -->
      <div v-if="computedSlides.length > 1" class="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 pointer-events-none md:px-6">
        <button 
          @click="prevSlide" 
          class="pointer-events-auto flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft class="h-6 w-6" />
        </button>
        <button 
          @click="nextSlide" 
          class="pointer-events-auto flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Siguiente"
        >
          <ChevronRight class="h-6 w-6" />
        </button>
      </div>

      <!-- Navigation Dots (only if multiple slides exist) -->
      <div v-if="computedSlides.length > 1" class="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        <button 
          v-for="(_, index) in computedSlides" 
          :key="index"
          @click="goToSlide(index)"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="[
            index === activeSlideIndex 
              ? 'w-8 bg-secondary shadow-md shadow-secondary/25' 
              : 'w-2.5 bg-white/40 hover:bg-white/60'
          ]"
          :aria-label="`Ir a diapositiva ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Info, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface CTA {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

interface Slide {
  tag?: string
  title: string
  subtitle: string
  backgroundImage: string
  badges?: string[]
  ctas?: CTA[]
}

interface Props {
  title?: string
  subtitle?: string
  backgroundImage?: string
  minHeight?: string
  tag?: string
  badges?: string[]
  ctas?: CTA[]
  slides?: Slide[]
  autoplayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  backgroundImage: '/images/hero-bg.png',
  minHeight: '560px',
  autoplayInterval: 6000
})

const computedSlides = computed<Slide[]>(() => {
  if (props.slides && props.slides.length > 0) {
    return props.slides
  }
  return [{
    tag: props.tag,
    title: props.title,
    subtitle: props.subtitle,
    backgroundImage: props.backgroundImage,
    badges: props.badges,
    ctas: props.ctas
  }]
})

const activeSlideIndex = ref(0)
const warmedSlideIndexes = new Set<number>([0])
let autoplayTimer: any = null

const warmSlideImage = (index: number) => {
  if (index < 0 || index >= computedSlides.value.length) return
  if (warmedSlideIndexes.has(index)) return

  const src = computedSlides.value[index]?.backgroundImage
  if (!src || typeof window === 'undefined') return

  const load = () => {
    const img = new Image()
    img.decoding = 'async'
    img.src = src
    warmedSlideIndexes.add(index)
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(load, { timeout: 2000 })
  } else {
    window.setTimeout(load, 250)
  }
}

const warmNextSlideImage = () => {
  if (computedSlides.value.length <= 1) return
  warmSlideImage((activeSlideIndex.value + 1) % computedSlides.value.length)
}

const startAutoplay = () => {
  if (computedSlides.value.length <= 1) return
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, props.autoplayInterval)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const nextSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % computedSlides.value.length
  warmNextSlideImage()
}

const prevSlide = () => {
  activeSlideIndex.value = (activeSlideIndex.value - 1 + computedSlides.value.length) % computedSlides.value.length
  warmNextSlideImage()
}

const goToSlide = (index: number) => {
  activeSlideIndex.value = index
  warmNextSlideImage()
}

onMounted(() => {
  warmedSlideIndexes.add(activeSlideIndex.value)
  warmNextSlideImage()
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
/* Ken Burns subtle zoom-in animation */
@keyframes kenburns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.06);
  }
}

.animate-kenburns {
  animation: kenburns 8s ease-out forwards;
}

/* Background fade transition */
.hero-bg-fade-enter-active,
.hero-bg-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.hero-bg-fade-enter-from,
.hero-bg-fade-leave-to {
  opacity: 0;
}

/* Slide fade transition */
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from {
  transform: translateY(12px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}
</style>
