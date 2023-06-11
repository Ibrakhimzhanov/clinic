<script setup>
import { partners } from '../data.js'
</script>
<template>
  <div
    class="relative flex min-h-[141px] items-center justify-around overflow-hidden bg-white shadow-OurShadow"
  >
    <div class="animate flex h-full w-full items-center justify-around">
      <img v-for="{ path, alt } in partners" :key="alt" :src="path" :alt="alt" />
    </div>
  </div>
</template>
<style scoped>
.animate {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
