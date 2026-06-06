<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      :slides="heroSlides"
      min-height="560px"
    />

    <!-- Clients Section -->
    <ClientsSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Process Section -->
    <ProcessSection />

    <!-- Auvo Platform Section -->
    <AuvoSection />

    <!-- Gallery Section -->
    <section class="bg-white py-14 lg:py-16 border-t border-slate-100">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan text-sm tracking-wider uppercase mb-2">
            <Image class="h-4 w-4" /> Galería de proyectos
          </span>
          <h2 class="text-3xl font-extrabold md:text-4xl font-display text-navy">
            Compromiso <span class="text-cyan">visual</span> con la calidad
          </h2>
          <p class="mt-4 text-base text-slate-600">
            Registro fotográfico real de nuestras inspecciones técnicas, modernizaciones mecánicas y visitas de mantenimiento preventivo mensual.
          </p>
        </div>
        
        <!-- Gallery Slider Component -->
        <GallerySlider @open-lightbox="openLightbox" />
      </div>
    </section>

    <!-- Brands Section -->
    <BrandsSection />

    <!-- FAQ Section -->
    <FaqSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Lightbox Modal -->
    <LightboxModal
      v-model="lightboxIndex"
      v-model:visible="lightboxVisible"
      :images="galleryImages"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Image } from 'lucide-vue-next'
import HeroSection from '../components/HeroSection.vue'
import ClientsSection from '../components/home/ClientsSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import AuvoSection from '../components/home/AuvoSection.vue'
import GallerySlider from '../components/home/GallerySlider.vue'
import BrandsSection from '../components/home/BrandsSection.vue'
import FaqSection from '../components/home/FaqSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
import LightboxModal from '../components/home/LightboxModal.vue'

const heroSlides = [
  {
    tag: 'Transporte Vertical Certificado',
    title: 'Ascensores Modernos y Seguros',
    subtitle: 'Mantenimiento preventivo multimarca mensual, reparaciones y modernizaciones integrales bajo la normativa MINVU chilena.',
    backgroundImage: '/images/hero-ascensores.png',
    badges: [
      'Registro MINVU Certificado',
      'Software de Gestión AUVO',
      'Soporte de Emergencia 24/7'
    ],
    ctas: [
      { text: 'Solicitar cotización técnica', href: '/#contacto', variant: 'primary' },
      { text: 'Nuestros servicios', href: '/#servicios', variant: 'secondary' }
    ]
  },
  {
    tag: 'Alto Tránsito y Rendimiento',
    title: 'Escaleras Mecánicas de Alta Gama',
    subtitle: 'Soluciones de transporte continuo y seguro para centros comerciales, aeropuertos y estaciones de alto tránsito.',
    backgroundImage: '/images/hero-escaleras.png',
    badges: [
      'Mantenimiento Especializado',
      'Seguridad Certificada',
      'Operación Ininterrumpida'
    ],
    ctas: [
      { text: 'Cotizar servicio', href: '/#contacto', variant: 'primary' },
      { text: 'Ver servicios', href: '/#servicios', variant: 'secondary' }
    ]
  },
  {
    tag: 'Uso Industrial y Comercial',
    title: 'Montacargas Robustos e Industriales',
    subtitle: 'Diseño, instalación y mantención de equipos de carga de gran resistencia, optimizando la logística de su empresa o bodega.',
    backgroundImage: '/images/hero-montacargas.png',
    badges: [
      'Capacidad de Carga Pesada',
      'Estructuras Reforzadas',
      'Cumplimiento Legal Exigente'
    ],
    ctas: [
      { text: 'Cotizar montacargas', href: '/#contacto', variant: 'primary' },
      { text: 'Ver servicios', href: '/#servicios', variant: 'secondary' }
    ]
  },
  {
    tag: 'Accesibilidad Universal',
    title: 'Plataformas e Inclusión sin Límites',
    subtitle: 'Sistemas de elevación vertical e inclinada diseñados para facilitar la movilidad de personas con discapacidad en todo tipo de edificaciones.',
    backgroundImage: '/images/hero-plataformas.png',
    badges: [
      'Accesibilidad Universal',
      'Instalación Rápida y Limpia',
      'Operación Sencilla y Segura'
    ],
    ctas: [
      { text: 'Solicitar evaluación', href: '/#contacto', variant: 'primary' },
      { text: 'Ver servicios', href: '/#servicios', variant: 'secondary' }
    ]
  }
]

useSeoMeta({
  title: 'MYT Ascensores | Soluciones avanzadas de transporte vertical',
  description: 'MYT Ascensores: mantención, reparación e instalación de ascensores en Chile. Servicio multimarca certificado MINVU con trazabilidad de reportes vía software AUVO.',
  ogTitle: 'MYT Ascensores | Soluciones de Transporte Vertical',
  ogDescription: 'Servicio técnico especializado multimarca para comunidades de edificios y empresas. Certificado MINVU y digitalización de trazabilidad técnica.'
})

const lightboxIndex = ref(0)
const lightboxVisible = ref(false)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxVisible.value = true
}

const galleryImages = [
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM.jpeg', title: 'Inspección Técnica de Cabina y Sistemas' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (1).jpeg', title: 'Mantenimiento Preventivo de Poleas y Tracción' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (2).jpeg', title: 'Modernización de Equipos y Tableros de Control' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (3).jpeg', title: 'Servicio Técnico Especializado Multimarca' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.40 PM (4).jpeg', title: 'Instalación y Ajuste de Sistemas de Seguridad' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM.jpeg', title: 'Inspección de Motores y Limitadores de Velocidad' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM (1).jpeg', title: 'Calibración de Sensores e Indicadores Digitales' },
  { src: '/images/gallery/WhatsApp Image 2026-05-11 at 6.54.41 PM (2).jpeg', title: 'Control de Calidad y Entrega de Proyectos' }
]
</script>
