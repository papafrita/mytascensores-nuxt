<template>
  <!-- Global JSON-LD structured data (LocalBusiness + WebSite) -->
</template>

<script setup lang="ts">
import { useHead } from '#app'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mytascensores.cl/#business',
  'name': 'MYT Ascensores',
  'legalName': 'MYT Ascensores',
  'url': 'https://mytascensores.cl',
  'logo': 'https://mytascensores.cl/images/logo-myt.png',
  'image': 'https://mytascensores.cl/images/og-image.png',
  'description': 'Empresa chilena especializada en mantención, reparación e instalación de ascensores. Servicio multimarca certificado MINVU e ISO 9001.',
  'telephone': '+56222060170',
  'contactPoint': [
    { '@type': 'ContactPoint', 'telephone': '+56222060170', 'contactType': 'sales', 'areaServed': 'CL', 'availableLanguage': ['Spanish'] },
    { '@type': 'ContactPoint', 'telephone': '+56967579214', 'contactType': 'customer support', 'areaServed': 'CL', 'availableLanguage': ['Spanish'] },
    { '@type': 'ContactPoint', 'telephone': '+56931831327', 'contactType': 'customer support', 'areaServed': 'CL', 'availableLanguage': ['Spanish'] },
  ],
  'email': 'contacto@mytascensores.cl',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Carmen Covarrubias 285',
    'addressLocality': 'Ñuñoa',
    'addressRegion': 'Región Metropolitana',
    'postalCode': '7750000',
    'addressCountry': 'CL',
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': '09:00',
      'closes': '13:00',
    },
  ],
  'priceRange': '$$',
  'currenciesAccepted': 'CLP',
  'paymentAccepted': 'Efectivo, Transferencia bancaria, Tarjeta de crédito',
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
  'hasCredential': [
    {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'Registro MINVU',
      'name': 'Registro Nacional de Proveedores Técnicos - Rol N°256, Resolución N°1452',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'Certificación ISO 9001',
      'name': 'ISO 9001 - Sistema de Gestión de la Calidad',
    },
  ],
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
