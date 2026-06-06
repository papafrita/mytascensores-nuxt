<script setup lang="ts">
import { ChevronRight, Tag } from 'lucide-vue-next'

defineProps<{
  category: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="relative bg-primary-dark text-white py-16 md:py-20 overflow-hidden">
    <!-- Background Subtle Gradients -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-10"
      style="background-image: url('/images/hero-bg.png')"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-secondary/35" />
    <div class="absolute -right-20 -top-20 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <nav
        class="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-4 font-medium"
        aria-label="Breadcrumb"
      >
        <NuxtLink to="/" class="hover:text-cyan transition-colors">Inicio</NuxtLink>
        <ChevronRight class="h-3.5 w-3.5 text-white/40" />
        <NuxtLink to="/#servicios" class="hover:text-cyan transition-colors">Servicios</NuxtLink>
        <ChevronRight class="h-3.5 w-3.5 text-white/40" />
        <span class="text-cyan font-semibold">{{ category }}</span>
      </nav>

      <!-- Banner Content -->
      <div class="max-w-4xl">
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/10 border border-secondary/20 text-secondary mb-4"
        >
          <Tag class="h-3 w-3" />
          {{ category }}
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
          {{ title }}
        </h1>
        <p class="mt-4 text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
