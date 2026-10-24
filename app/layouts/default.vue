<template>
  <div class="min-h-screen bg-surface text-ink font-sans antialiased overflow-x-clip">
    <div class="sticky top-0 z-40">
      <TopInfoBar />
      <TheHeader />
    </div>
    <SchemaOrg />
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
