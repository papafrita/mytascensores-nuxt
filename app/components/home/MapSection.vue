<template>
  <section id="cobertura" class="bg-primary py-4 lg:py-3 text-white relative overflow-hidden">
    <!-- Background Glow Effects -->
    <div class="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Section Header -->
        <div class="text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:col-span-6">
          <span class="inline-flex items-center gap-2 font-display font-semibold text-secondary text-sm tracking-wider uppercase mb-2">
            <MapPin class="h-4 w-4" /> Cobertura Nacional
          </span>
          <h2 class="text-3xl font-extrabold md:text-4xl lg:text-5xl font-display leading-tight text-white">
            Presencia estratégica en <span class="text-cyan">todo el país</span>
          </h2>
          <p class="mt-4 text-base text-white/80 leading-relaxed">
            Nuestra red de mantenimiento e instalaciones cuenta con más de 150 instalaciones distribuidas a lo largo del territorio nacional.
          </p>
        </div>

        <!-- Centered Vertical Map Container with Side-by-Side Static Tooltip -->
        <div class="lg:col-span-6 flex flex-row items-center justify-center gap-4 select-none w-full max-w-[340px] mx-auto bg-primary-dark/30 border border-white/5 rounded-3xl py-2 px-4 shadow-premium backdrop-blur-sm">
          
          <!-- Vertical SVG Map -->
          <div class="h-[310px] w-[53px] md:h-[420px] md:w-[72px] relative flex-shrink-0">
            <svg 
              viewBox="0 0 280 1640" 
              class="w-full h-full drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Matrix rotates 90deg clockwise and shifts x coordinates to fit 0-280 range -->
              <g id="mapa_regiones" transform="matrix(0 1 -1 0 280 0)">
                <path 
                  v-for="region in mapData" 
                  :key="region.id"
                  :id="`path-${region.id}`"
                  :d="region.d"
                  class="transition-all duration-300 cursor-pointer stroke-primary-dark stroke-[1.5] paint-order-stroke"
                  :fill="getRegionFillColor(region)"
                  :style="getRegionStyle(region)"
                  @mouseenter="handleMouseEnter(region)"
                  @mouseleave="handleMouseLeave"
                  @click="handleRegionClick(region)"
                >
                  <title>{{ region.name }} - {{ region.projects }} {{ region.projects === 1 ? 'Instalación' : 'Instalaciones' }}</title>
                </path>
              </g>
            </svg>
          </div>

          <!-- Static Tooltip always positioned at the center (vertically) next to the map -->
          <div 
            v-show="tooltipVisible"
            class="bg-white text-navy px-3 py-3.5 rounded-2xl shadow-premium border border-slate-100 w-full max-w-[170px] flex-grow transition-all duration-300"
          >
            <h4 class="font-display font-extrabold text-sm text-navy mb-2 leading-snug">
              {{ tooltipContent.name }}
            </h4>
            <div class="flex items-center gap-1.5 font-bold text-xs text-secondary-dark bg-secondary/5 px-2.5 py-1 rounded-xl w-max">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              <span>{{ tooltipContent.projects }} {{ tooltipContent.projects === 1 ? 'instalación' : 'instalaciones' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { MapPin } from 'lucide-vue-next'
import { useMapData, type RegionMapData } from '../../composables/useMapData'

const { mapData } = useMapData()

const hoveredRegionId = ref<string | null>(null)
const selectedRegionId = ref<string>('Metropolitana')

// Tooltip Reactivity
const tooltipVisible = ref(false)
const tooltipContent = ref({ name: '', projects: 0, capital: '' })

// Initialize tooltip content on mount
onMounted(() => {
  const defaultRegion = mapData.find(r => r.id === 'Metropolitana')
  if (defaultRegion) {
    tooltipContent.value = {
      name: defaultRegion.name,
      projects: defaultRegion.projects,
      capital: defaultRegion.capital
    }
    tooltipVisible.value = true
  }
})

const handleMouseEnter = (region: RegionMapData) => {
  hoveredRegionId.value = region.id
  tooltipContent.value = {
    name: region.name,
    projects: region.projects,
    capital: region.capital
  }
}

const handleMouseLeave = () => {
  hoveredRegionId.value = null
  // Reset tooltip content to show the currently selected region's data
  const selectedRegion = mapData.find(r => r.id === selectedRegionId.value)
  if (selectedRegion) {
    tooltipContent.value = {
      name: selectedRegion.name,
      projects: selectedRegion.projects,
      capital: selectedRegion.capital
    }
  }
}

// Click behaves as select
const handleRegionClick = (region: RegionMapData) => {
  selectedRegionId.value = region.id
  tooltipContent.value = {
    name: region.name,
    projects: region.projects,
    capital: region.capital
  }
}

// Compute density coloring based on region project count and active state
const getRegionFillColor = (region: RegionMapData) => {
  const isHovered = hoveredRegionId.value === region.id
  const isSelected = selectedRegionId.value === region.id
  
  if (isHovered || isSelected) {
    return '#2BC7D9' // Highlight color (cyan)
  }

  // Density shades (opacities of cyan #2BC7D9)
  const count = region.projects
  if (count >= 100) return 'rgba(43, 199, 217, 0.95)'
  if (count >= 30) return 'rgba(43, 199, 217, 0.75)'
  if (count >= 11) return 'rgba(43, 199, 217, 0.50)'
  return 'rgba(43, 199, 217, 0.25)' // Low density
}

// Compute style to add smooth drop-shadow glow to active elements
const getRegionStyle = (region: RegionMapData) => {
  const isHovered = hoveredRegionId.value === region.id
  const isSelected = selectedRegionId.value === region.id
  
  if (isHovered || isSelected) {
    return {
      filter: 'drop-shadow(0px 0px 8px rgba(43, 199, 217, 0.8))',
      transform: 'scale(1.02)',
      transformOrigin: 'center',
      zIndex: 50
    }
  }
  return {
    transform: 'scale(1)',
    zIndex: 1
  }
}
</script>

<style scoped>
/* Ensure clean SVG stroke scaling */
path {
  transform-box: fill-box;
}
</style>
