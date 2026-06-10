<template>
  <div class="min-h-screen bg-surface text-ink font-sans antialiased overflow-x-hidden">
    <TopInfoBar />
    <SchemaOrg />
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
    <!-- <WhatsAppFab /> -->
  </div>
</template>

<script setup lang="ts">
import TopInfoBar from '../components/TopInfoBar.vue'
import SchemaOrg from '../components/SchemaOrg.vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import WhatsAppFab from '../components/WhatsAppFab.vue'
</script>
