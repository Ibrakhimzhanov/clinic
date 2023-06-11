<script setup>
import TheService from '@/components/TheService.vue'
import TheOurPartner from '@/components/TheOurPartner.vue'
import TheAbout from '@/components/TheAbout.vue'
import ThePersonal from '@/components/ThePersonal.vue'
// import TheHeader from '@/components/TheHeader.vue'
import TheArticles from '@/components/TheArticles.vue'
import TheFeedback from '@/components/TheFeedback.vue'
import TheContacts from '@/components/TheContacts.vue'
import TheMain from './TheMain.vue'
</script>
<template>
  <div class="relative flex h-[650px] grow flex-col bg-[#E5F0FF] px-16">
    <!-- <TheHeader /> -->
    <TheMain />
  </div>
  <TheService  />
  <TheOurPartner />
  <ThePersonal />
  <TheAbout />
  <TheArticles />
  <TheFeedback />
  <TheContacts />
</template>
