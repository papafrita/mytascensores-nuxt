<template>
  <NuxtLayout>
    <section class="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
      <span class="font-display font-semibold text-cyan text-sm tracking-wider uppercase">
        Error {{ error.statusCode }}
      </span>
      <h1 class="mt-3 text-4xl font-extrabold font-display text-navy md:text-5xl">
        {{ isNotFound ? 'Página no encontrada' : 'Ocurrió un error' }}
      </h1>
      <p class="mt-5 text-base text-slate-600 leading-relaxed">
        {{ isNotFound
          ? 'La página que buscas no existe o fue movida. Revisa nuestros servicios o vuelve al inicio.'
          : 'No pudimos cargar esta página. Inténtalo nuevamente en unos minutos.' }}
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl bg-tertiary hover:bg-tertiary-dark text-white font-bold px-7 py-4 transition-all duration-300 shadow-lg shadow-tertiary/15 text-sm"
          @click="clearError({ redirect: '/' })"
        >
          Volver al inicio
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-xl border border-slate-300 hover:bg-white px-7 py-4 font-semibold text-navy transition-all text-sm"
          @click="clearError({ redirect: '/servicios/' })"
        >
          Ver servicios
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => isNotFound.value ? 'Página no encontrada | MYT Ascensores' : 'Error | MYT Ascensores',
  robots: 'noindex, follow'
})
</script>
