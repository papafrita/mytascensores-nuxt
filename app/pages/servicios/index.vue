<template>
  <div>
    <HeroSection
      tag="Servicios MYT Ascensores"
      title="Servicios de mantención, reparación e instalación de ascensores"
      subtitle="Atención técnica multimarca para ascensores, montacargas y equipos de transporte vertical, ejecutada por una empresa inscrita en el MINVU y certificada ISO 9001."
      background-image="/images/hero-bg.png"
      min-height="440px"
    />

    <section class="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(service, id) in servicesData"
          :key="id"
          :to="`/servicios/${id}`"
          class="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 group flex flex-col"
        >
          <img
            :src="service.image"
            :alt="service.title"
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
            class="h-48 w-full object-cover"
          />
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-secondary-dark">
              {{ service.category }}
            </span>
            <h2 class="mt-2 font-display font-extrabold text-xl text-navy leading-snug group-hover:text-cyan transition-colors">
              {{ service.title }}
            </h2>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
              {{ service.description }}
            </p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-tertiary">
              Conocer detalles del servicio <ArrowUpRight class="h-4 w-4" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import HeroSection from '../../components/HeroSection.vue'
import { useServicesData } from '../../composables/useServicesData'

const { servicesData } = useServicesData()

useSeoMeta({
  title: 'Servicios de Mantención y Reparación de Ascensores | MYT',
  description: 'Mantención correctiva y emergencias 24/7, reparación y normalización ante el MINVU, e importación e instalación de ascensores multimarca en Chile.',
  ogTitle: 'Servicios | MYT Ascensores',
  ogDescription: 'Mantención, reparación, normalización e instalación de ascensores multimarca en Chile.',
  ogUrl: absoluteUrl('/servicios'),
  ogImage: `${SITE_URL}/images/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Servicios | MYT Ascensores',
  twitterDescription: 'Mantención, reparación, normalización e instalación de ascensores multimarca en Chile.',
  twitterImage: `${SITE_URL}/images/og-image.png`
})

useHead({
  link: [
    { rel: 'canonical', href: absoluteUrl('/servicios') }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: absoluteUrl('/')
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Servicios'
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: Object.entries(servicesData).map(([id, service], index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          url: absoluteUrl(`/servicios/${id}`)
        }))
      })
    }
  ]
})
</script>
