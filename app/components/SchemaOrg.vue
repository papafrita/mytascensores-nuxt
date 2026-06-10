<template>
  <!-- Global JSON-LD structured data (Organization + WebSite) -->
</template>

<script setup lang="ts">
import { useHead } from '#app'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'MYT Ascensores',
  'url': 'https://mytascensores.cl',
  'logo': 'https://mytascensores.cl/images/logo-myt.png',
  'description': 'Empresa chilena especializada en mantención, reparación e instalación de ascensores. Servicio multimarca certificado MINVU.',
  'telephone': ['+56323536728', '+56931831327'],
  'email': 'contacto@mytascensores.cl',
  'areaServed': {
    '@type': 'Country',
    'name': 'Chile',
  },
  'sameAs': [
    'https://facebook.com/mytascensores',
    'https://www.instagram.com/mytascensores/',
    'https://www.youtube.com/@mytascensores-zl2pt',
  ],
  'knowsAbout': [
    'ascensores',
    'escaleras mecánicas',
    'montacargas',
    'plataformas de accesibilidad',
    'transporte vertical',
    'mantención MINVU',
  ],
  'hasCredential': {
    '@type': 'EducationalOccupationalCredential',
    'credentialCategory': 'Registro MINVU',
    'name': 'Registro Nacional de Proveedores Técnicos - Rol N°256, Resolución N°1452',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'MYT Ascensores',
  'url': 'https://mytascensores.cl',
  'inLanguage': 'es',
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema),
      tagPosition: 'head',
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(webSiteSchema),
      tagPosition: 'head',
    },
  ],
})
</script>
