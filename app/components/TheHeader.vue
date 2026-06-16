<template>
  <header id="mainHeader" :class="['sticky top-0 z-40 transition-all duration-300', isScrolled ? 'glass-nav-scrolled bg-[#f3f6fa] shadow-md' : 'glass-nav bg-[#f3f6fa]/90 backdrop-blur-md']">
    <nav aria-label="Navegación principal" class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <img src="/images/logo-myt.webp" alt="MYT Ascensores" width="1080" height="633" decoding="async" :class="['object-contain transition-all duration-300', isScrolled ? 'h-14 md:h-20 lg:h-24' : 'h-20 md:h-28 lg:h-32']" />
      </NuxtLink>
      
      <!-- Desktop Navigation Menu -->
      <div class="hidden md:flex items-center gap-8 lg:gap-10">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name"
          :to="link.to"
          :class="[
            'font-medium transition-colors py-2 text-sm lg:text-base relative after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan hover:after:w-full after:transition-all hover:text-cyan',
            isLinkActive(link.to) ? 'text-cyan after:w-full' : 'text-slate-700 after:w-0'
          ]"
        >
          {{ link.name }}
        </NuxtLink>
        
        <NuxtLink class="inline-flex items-center gap-2 rounded-lg bg-tertiary border border-tertiary px-5 py-3 font-semibold text-white hover:bg-tertiary-dark hover:border-tertiary-dark shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all text-sm" to="/#contacto">
          Solicitar cotización 
          <ArrowUpRight class="h-4 w-4" />
        </NuxtLink>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="toggleMenu" class="rounded-xl border border-slate-200 p-2.5 text-slate-700 md:hidden hover:bg-slate-50 transition-colors" aria-label="Abrir menú">
        <component :is="isMenuOpen ? X : Menu" class="h-6 w-6 transition-transform duration-300" />
      </button>

      <!-- Mobile Navigation Drawer -->
      <div v-if="isMenuOpen" class="absolute left-6 right-6 top-24 rounded-2xl bg-white p-6 shadow-premium border border-slate-100 flex flex-col gap-4 md:hidden z-50">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name"
          :to="link.to"
          @click="isMenuOpen = false"
          :class="['block py-2.5 px-4 rounded-xl font-semibold hover:bg-surface hover:text-cyan transition-all', isLinkActive(link.to) ? 'text-cyan bg-surface' : 'text-slate-700']"
        >
          {{ link.name }}
        </NuxtLink>
        <hr class="border-slate-100 my-2" />
        <NuxtLink class="inline-flex items-center justify-center gap-2 rounded-xl bg-tertiary border border-tertiary py-4 font-bold text-white shadow-sm hover:bg-tertiary-dark hover:border-tertiary-dark transition-all" to="/#contacto" @click="isMenuOpen = false">
          Solicitar Cotización 
          <ArrowUpRight class="h-4.5 w-4.5" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Inicio', to: '/' },
  { name: 'Nosotros', to: '/nosotros' },
  { name: 'Servicios', to: '/#servicios' },
  { name: 'Proceso', to: '/#proceso' },
  { name: 'Preguntas Frecuentes', to: '/#preguntas' },
  { name: 'Contacto', to: '/#contacto' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const isLinkActive = (to: string) => {
  if (to === '/') {
    return route.path === '/' && !route.hash
  }
  if (to.startsWith('/#')) {
    return route.path === '/' && route.hash === to.substring(1)
  }
  return route.path === to
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
