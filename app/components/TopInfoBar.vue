<template>
  <div class="bg-primary text-white border-b border-white/5 relative z-50">
    <div :class="['mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between px-6 lg:px-8 transition-all duration-300', isScrolled ? 'gap-1 py-1 text-[10px] md:text-xs' : 'gap-3 py-4 text-xs md:text-sm']">
      <div class="flex flex-wrap justify-center sm:justify-start items-center gap-x-7 gap-y-2">
        <a class="inline-flex items-center gap-2 hover:text-secondary transition-colors" href="tel:+56222060170">
          <strong class="text-white font-bold">Ventas:</strong>
          <Phone class="h-4 w-4 text-secondary" />
          <span class="font-semibold">+56 2 2206 0170</span>
        </a>
        <a class="inline-flex items-center gap-2 hover:text-secondary transition-colors" href="mailto:contacto@mytascensores.cl">
          <strong class="text-white font-bold">Contacto:</strong>
          <Mail class="h-4 w-4 text-secondary" />
          <span class="font-semibold">contacto@mytascensores.cl</span>
        </a>
        <span class="hidden sm:inline-flex items-center gap-2 text-white/90">
          <MapPin class="h-4 w-4 text-secondary" />
          Carmen Covarrubias # 285, Ñuñoa
        </span>
      </div>
      <div class="hidden sm:flex items-center gap-4">
        <div class="flex items-center gap-2">
          <a href="https://facebook.com/mytascensores" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-secondary transition-colors p-1.5 flex items-center justify-center h-9 w-9 text-lg md:text-xl" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="https://www.instagram.com/mytascensores/" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-secondary transition-colors p-1.5 flex items-center justify-center h-9 w-9 text-lg md:text-xl" aria-label="Instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.youtube.com/@mytascensores-zl2pt" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-secondary transition-colors p-1.5 flex items-center justify-center h-9 w-9 text-lg md:text-xl" aria-label="YouTube">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone, MapPin, Mail } from 'lucide-vue-next'
import { useScrolled } from '~/composables/useScrolled'

const { isScrolled } = useScrolled()
</script>
