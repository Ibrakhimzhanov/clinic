<script setup>
import TheLogotype from '@/components/TheLogotype.vue'
import TheLogin from '@/components/TheLogin.vue'
import NavbarItems from '@/components/NavbarItems.vue'
import ChangeLanguage from '@/components/ChangeLanguage.vue'
</script>

<template>
  <div class="w-full bg-white flex items-center justify-around rounded-[2.5rem] px-6 py-2.5 mt-5">
    <TheLogotype />
    <NavbarItems />
    <div class="flex items-center gap-4">
      <TheLogin />
      <ChangeLanguage />
    </div>
  </div>
</template>
