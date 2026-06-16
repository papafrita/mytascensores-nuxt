<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      tag="Conoce a MYT Ascensores"
      title="Comprometidos con la excelencia en transporte vertical"
      subtitle="Somos una empresa experta e inscrita en el registro del MINVU, enfocada en brindar servicios preventivos y correctivos de máxima calidad que garantizan la seguridad, durabilidad y optimización operacional de tus equipos de ascensores."
      background-image="/images/hero-bg.png"
      min-height="440px"
    />

    <!-- Quiénes Somos Section -->
    <section class="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text details -->
        <div class="lg:col-span-7">
          <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan text-sm tracking-wider uppercase mb-3">
            <ShieldCheck class="h-4 w-4" /> ¿Quiénes Somos?
          </span>
          <h2 class="text-3xl font-extrabold md:text-4xl font-display text-navy leading-tight mb-6">
            Líderes en asistencia técnica y <span class="text-cyan">trazabilidad</span> operacional
          </h2>
          <p class="text-slate-600 leading-relaxed text-base mb-5">
            <strong>MYT Ascensores</strong> es una empresa chilena altamente especializada y certificada, orientada a la asistencia integral de sistemas de transporte vertical. Nos enorgullece contar con la certificación formal del MINVU (Rol N°256, Resolución N°1452), lo que garantiza el estricto cumplimiento normativo y técnico exigido por la ley de copropiedad e instalaciones.
          </p>
          <p class="text-slate-600 leading-relaxed text-base mb-6">
            Nuestros procesos integran tecnología de punta como el software <strong>Auvo</strong>, permitiéndonos ofrecer un seguimiento detallado y transparente en tiempo real para cada uno de los servicios. Brindamos una atención profesional robusta que abarca desde la mantención preventiva multimarca mensual hasta proyectos de importación, instalación y modernización a gran escala.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/#contacto" class="inline-flex items-center gap-2 rounded-xl bg-tertiary hover:bg-tertiary-dark text-white font-bold px-6 py-4 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-tertiary/15 text-sm">
              Contactar a un asesor <ArrowUpRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Corporate Stats -->
        <div class="lg:col-span-5">
          <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium relative overflow-hidden group">
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/10 transition-all duration-500"></div>
            
            <h3 class="text-xl font-extrabold font-display text-navy mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
              <BarChart3 class="text-cyan h-5 w-5" /> Nuestro impacto en cifras
            </h3>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="p-4 bg-surface rounded-2xl border border-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-cyan/20">
                <span class="block text-3xl font-extrabold font-display text-cyan mb-1">+450</span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Equipos activos</span>
              </div>
              
              <div class="p-4 bg-surface rounded-2xl border border-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-cyan/20">
                <span class="block text-3xl font-extrabold font-display text-primary mb-1">+600</span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Servicios exitosos</span>
              </div>
              
              <div class="p-4 bg-surface rounded-2xl border border-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-cyan/20">
                <span class="block text-3xl font-extrabold font-display text-cyan mb-1">24/7</span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Soporte Técnico</span>
              </div>
              
              <div class="p-4 bg-surface rounded-2xl border border-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-cyan/20">
                <span class="block text-3xl font-extrabold font-display text-primary mb-1">100%</span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Garantía MINVU</span>
              </div>
            </div>
            
            <div class="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500 justify-center">
              <CheckCircle2 class="h-4.5 w-4.5 text-tertiary" /> Gestión digital certificada vía AUVO
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión y Visión Section -->
    <section class="bg-primary py-16 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan text-sm tracking-wider uppercase mb-2">
            <Compass class="h-4 w-4" /> Hacia dónde vamos
          </span>
          <h2 class="text-3xl font-extrabold md:text-5xl font-display leading-tight">
            Nuestros pilares estratégicos
          </h2>
          <p class="mt-4 text-base leading-relaxed text-white/80">
            Establecemos objetivos claros orientados a liderar la industria de la mantención con un estándar superior en el cuidado de las personas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Mission Card -->
          <div class="bg-primary-dark/60 rounded-3xl border border-white/10 p-8 md:p-10 shadow-premium relative overflow-hidden group">
            <div class="absolute -right-16 -top-16 w-36 h-36 bg-cyan/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan/15 transition-all duration-300"></div>
            
            <div class="flex items-center justify-between mb-6">
              <span class="rounded-2xl bg-cyan text-primary p-4 shadow-lg shadow-cyan/10 flex items-center justify-center">
                <Target class="h-7 w-7 text-white" />
              </span>
              <span class="text-cyan font-bold tracking-wider text-xs uppercase">Propósito</span>
            </div>
            
            <h3 class="font-display font-extrabold text-2xl text-white mb-4">Nuestra Misión</h3>
            <p class="text-white/85 text-sm md:text-base leading-relaxed">
              Garantizar la seguridad, confiabilidad y continuidad operacional del transporte vertical en Chile, a través de servicios preventivos y correctivos multimarca certificados bajo los más altos estándares normativos. Nos dedicamos a proteger la integridad física de los usuarios y a extender la vida útil de los equipos mediante una asistencia técnica ágil, profesional, transparente y personalizada.
            </p>
          </div>

          <!-- Vision Card -->
          <div class="bg-primary-dark/60 rounded-3xl border border-white/10 p-8 md:p-10 shadow-premium relative overflow-hidden group">
            <div class="absolute -right-16 -top-16 w-36 h-36 bg-purple/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple/15 transition-all duration-300"></div>
            
            <div class="flex items-center justify-between mb-6">
              <span class="rounded-2xl bg-tertiary text-white p-4 shadow-lg shadow-tertiary/10 flex items-center justify-center">
                <Eye class="h-7 w-7 text-white" />
              </span>
              <span class="text-tertiary font-bold tracking-wider text-xs uppercase">Proyección</span>
            </div>
            
            <h3 class="font-display font-extrabold text-2xl text-white mb-4">Nuestra Visión</h3>
            <p class="text-white/85 text-sm md:text-base leading-relaxed">
              Ser reconocidos a nivel nacional como la empresa referente en ingeniería, mantención e instalación de ascensores, destacando por nuestro compromiso riguroso con la seguridad y por la incorporación constante de innovaciones tecnológicas. Aspiramos a redefinir el estándar de calidad de la industria vertical a través de la digitalización total de los reportes y del desarrollo permanente de nuestro capital humano.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores Section -->
    <section class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-flex items-center gap-2 font-display font-semibold text-cyan text-sm tracking-wider uppercase mb-2">
          <Heart class="h-4 w-4" /> Filosofía Corporativa
        </span>
        <h2 class="text-3xl font-extrabold md:text-4xl font-display text-navy">
          Nuestros <span class="text-cyan">Valores</span> Core
        </h2>
        <p class="mt-4 text-base text-slate-600">
          La ética de trabajo en MYT Ascensores está regida por principios sólidos que guían cada decisión y aseguran un servicio de alto rendimiento.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Valor 1: Seguridad -->
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full justify-between">
          <div>
            <div class="mb-5 flex items-center justify-between">
              <span class="rounded-xl bg-cyan/10 text-cyan p-3 transition-transform group-hover:scale-110 flex items-center justify-center">
                <Shield class="h-5.5 w-5.5" />
              </span>
              <span class="text-[10px] font-extrabold uppercase text-cyan tracking-wider">Prioridad Uno</span>
            </div>
            <h3 class="font-display font-bold text-lg text-navy mb-2 group-hover:text-cyan transition-colors">Seguridad Total</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">
              Es nuestra máxima prioridad. Llevamos a cabo controles exhaustivos y protocolos preventivos estrictos en cada visita técnica para garantizar el resguardo de la comunidad y del equipo de trabajo.
            </p>
          </div>
        </div>

        <!-- Valor 2: Compromiso -->
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full justify-between">
          <div>
            <div class="mb-5 flex items-center justify-between">
              <span class="rounded-xl bg-cyan/10 text-cyan p-3 transition-transform group-hover:scale-110 flex items-center justify-center">
                <Clock class="h-5.5 w-5.5" />
              </span>
              <span class="text-[10px] font-extrabold uppercase text-cyan tracking-wider">Atención 24/7</span>
            </div>
            <h3 class="font-display font-bold text-lg text-navy mb-2 group-hover:text-cyan transition-colors">Compromiso Real</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">
              Asumimos con responsabilidad la disponibilidad de los equipos. Por ello, brindamos atención técnica las 24 horas del día para responder ágilmente ante emergencias críticas en el transporte vertical.
            </p>
          </div>
        </div>

        <!-- Valor 3: Excelencia -->
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full justify-between">
          <div>
            <div class="mb-5 flex items-center justify-between">
              <span class="rounded-xl bg-cyan/10 text-cyan p-3 transition-transform group-hover:scale-110 flex items-center justify-center">
                <Award class="h-5.5 w-5.5" />
              </span>
              <span class="text-[10px] font-extrabold uppercase text-cyan tracking-wider">Calidad Técnica</span>
            </div>
            <h3 class="font-display font-bold text-lg text-navy mb-2 group-hover:text-cyan transition-colors">Excelencia Técnica</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">
              Nuestro personal cuenta con formación experta en sistemas de transporte vertical multimarca. Respetamos rigurosamente las pautas de fabricantes para proveer soluciones precisas y duraderas.
            </p>
          </div>
        </div>

        <!-- Valor 4: Transparencia -->
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-premium hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 group flex flex-col h-full justify-between">
          <div>
            <div class="mb-5 flex items-center justify-between">
              <span class="rounded-xl bg-cyan/10 text-cyan p-3 transition-transform group-hover:scale-110 flex items-center justify-center">
                <FileText class="h-5.5 w-5.5" />
              </span>
              <span class="text-[10px] font-extrabold uppercase text-cyan tracking-wider">Trazabilidad</span>
            </div>
            <h3 class="font-display font-bold text-lg text-navy mb-2 group-hover:text-cyan transition-colors">Transparencia</h3>
            <p class="text-slate-500 text-xs md:text-sm leading-relaxed">
              Registramos y comunicamos de manera íntegra cada acción realizada. A través de Auvo, los clientes acceden a reportes confiables sobre la trazabilidad técnica e histórica de sus instalaciones.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificación de Detalle Section -->
    <section class="bg-surface py-14 border-t border-slate-200/50 relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-premium max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-shrink-0 bg-primary text-white p-6 rounded-2xl shadow-lg border border-primary/20 flex flex-col items-center justify-center text-center w-40 h-40">
            <CheckSquare class="h-10 w-10 text-secondary mb-3" />
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-300">MINVU</span>
            <span class="font-display font-extrabold text-lg mt-1">REGISTRADO</span>
          </div>
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-secondary/15 text-secondary-dark mb-4">
              <ShieldCheck class="h-3.5 w-3.5" /> Habilitación Legal Completa
            </span>
            <h3 class="text-2xl font-extrabold font-display text-navy mb-3">Empresa Habilitada e Inscrita ante el MINVU</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              <strong>MYT Ascensores</strong> cumple con la Ley de Copropiedad y con las exigencias reguladoras del Ministerio de Vivienda y Urbanismo de Chile. Nos encontramos debidamente inscritos bajo el <strong>Rol N°256, Resolución N°1452</strong> en el Registro Nacional de Proveedores Técnicos de Ascensores y Montacargas. Esto certifica legalmente que todas nuestras mantenciones periódicas y firmas de normalización tienen total validez administrativa y legal ante los entes fiscalizadores municipales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="bg-surface px-6 pb-16 lg:px-8">
      <div class="mx-auto max-w-7xl rounded-3xl bg-primary text-white p-8 md:p-16 relative overflow-hidden shadow-premium text-center">
        <div class="absolute -left-10 -bottom-10 w-96 h-96 bg-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute -right-10 -top-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mx-auto">
          <p class="inline-flex items-center gap-2 font-bold text-secondary text-sm tracking-wider uppercase mb-3">
            <Mail class="h-4 w-4" /> Trabajemos juntos
          </p>
          <h2 class="text-3xl font-extrabold md:text-5xl font-display mb-6">
            ¿Listo para elevar el estándar de tus <span class="text-secondary">ascensores</span>?
          </h2>
          <p class="text-white/80 font-light text-base md:text-lg leading-relaxed mb-8">
            Comunícate con nuestro equipo técnico y de ventas para coordinar una evaluación detallada de tus equipos, obtener una cotización sin compromisos o resolver cualquier duda operacional.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/#contacto" class="inline-flex items-center gap-2 rounded-xl bg-tertiary hover:bg-tertiary-dark text-white font-bold px-7 py-4 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-tertiary/15 text-sm md:text-base">
              Solicitar cotización técnica <ArrowUpRight class="h-5 w-5" />
            </NuxtLink>
            <a href="tel:+56323536728" class="inline-flex items-center justify-center rounded-xl border border-white/60 hover:bg-white hover:text-navy px-7 py-4 font-semibold text-white transition-all transform hover:-translate-y-0.5 text-sm md:text-base">
              Llamar a Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  ShieldCheck, 
  ArrowUpRight, 
  BarChart3, 
  CheckCircle2, 
  Compass, 
  Target, 
  Eye, 
  Shield, 
  Clock, 
  Award, 
  FileText, 
  CheckSquare, 
  Mail 
} from 'lucide-vue-next'
import HeroSection from '../components/HeroSection.vue'
import { Heart } from 'lucide-vue-next'

// Enhanced SEO meta for About page
useSeoMeta({
  title: 'Nosotros | MYT Ascensores — Empresa Certificada MINVU de Transporte Vertical',
  description: 'Conoce a MYT Ascensores: empresa inscrita en el registro MINVU (Rol N°256) especializada en mantención de ascensores en Chile. Misión, visión, valores y certificaciones.',
  ogTitle: 'Sobre MYT Ascensores | Empresa Certificada MINVU',
  ogDescription: 'Conoce nuestra misión, visión y valores. Empresa chilena inscrita en el MINVU con +450 equipos activos y +600 servicios exitosos.',
  ogUrl: 'https://mytascensores.cl/nosotros',
  ogImage: 'https://mytascensores.cl/images/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'MYT Ascensores | Quiénes Somos',
  twitterDescription: 'Empresa certificada MINVU dedicada a la mantención, reparación e instalación de ascensores en Chile. +450 equipos activos.',
  twitterImage: 'https://mytascensores.cl/images/og-image.png'
})

// Canonical URL + BreadcrumbList structured data
useHead({
  link: [
    { rel: 'canonical', href: 'https://mytascensores.cl/nosotros' }
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
            item: 'https://mytascensores.cl'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Nosotros'
          }
        ]
      })
    }
  ]
})
</script>
