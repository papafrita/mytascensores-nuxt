<template>
  <Transition name="fade">
    <div 
      v-if="visible" 
      class="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex flex-col justify-between p-6 select-none"
      @click.self="close"
    >
      <!-- Top header bar in Modal -->
      <div class="flex items-center justify-between text-white w-full max-w-7xl mx-auto">
        <span class="text-xs font-bold uppercase tracking-wider text-secondary">
          Imagen {{ modelValue + 1 }} de {{ images.length }}
        </span>
        <button 
          @click="close" 
          class="rounded-xl border border-white/10 p-2.5 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Cerrar modal"
        >
          <X class="h-6 w-6" />
        </button>
      </div>

      <!-- Main Slider Area -->
      <div class="flex-grow flex items-center justify-center relative w-full max-w-5xl mx-auto my-4">
        <!-- Prev Button -->
        <button 
          @click="prev" 
          class="absolute left-0 bg-white/5 border border-white/10 hover:bg-cyan hover:text-white text-white h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft class="h-6 w-6" />
        </button>

        <!-- Current Image -->
        <div class="max-w-full max-h-[70vh] flex items-center justify-center p-4">
          <Transition name="slide" mode="out-in">
            <img 
              :key="modelValue"
              :src="images[modelValue].src" 
              :alt="images[modelValue].title"
              decoding="async"
              class="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl border border-white/5"
            />
          </Transition>
        </div>

        <!-- Next Button -->
        <button 
          @click="next" 
          class="absolute right-0 bg-white/5 border border-white/10 hover:bg-cyan hover:text-white text-white h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          aria-label="Siguiente"
        >
          <ChevronRight class="h-6 w-6" />
        </button>
      </div>

      <!-- Footer Caption Area -->
      <div class="text-center pb-4 max-w-2xl mx-auto">
        <div class="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2.5 text-white text-sm font-semibold shadow-lg">
          {{ images[modelValue].title }}
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  images: Array<{ src: string; title: string }>
  modelValue: number
  visible: boolean
}>()

const emit = defineEmits(['update:visible', 'update:modelValue'])

const close = () => {
  emit('update:visible', false)
}

const next = () => {
  const nextVal = (props.modelValue + 1) % props.images.length
  emit('update:modelValue', nextVal)
}

const prev = () => {
  const prevVal = (props.modelValue - 1 + props.images.length) % props.images.length
  emit('update:modelValue', prevVal)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.visible) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: scale(0.97);
}

.slide-leave-to {
  opacity: 0;
  transform: scale(1.03);
}
</style>
