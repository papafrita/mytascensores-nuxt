import { ref } from 'vue'

// Shared scroll state across components (SSR-safe: stays false on server).
const isScrolled = ref(false)
let installed = false

export function useScrolled(threshold = 50) {
  if (import.meta.client && !installed) {
    installed = true
    const update = () => {
      isScrolled.value = window.scrollY > threshold
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
  }
  return { isScrolled }
}
