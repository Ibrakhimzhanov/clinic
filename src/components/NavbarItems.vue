<script setup>
const linkItems = ['Asosiy', 'Xizmatlar', 'Shifokor', 'Maqolalar', 'Sharhlar', 'Biz haqimizda']
</script>
<template>
  <ul class="flex justify-around w-2/4 font-sfMedium cursor-pointer">
    <li v-for="link in linkItems" :key="link">{{ link }}</li>
  </ul>
</template>
