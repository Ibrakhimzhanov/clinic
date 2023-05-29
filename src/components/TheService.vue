<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import serviceItems from '@/data.js'
</script>
<template>
  <SectionHeading class="mt-32" title="Bizning xizmatlar" />
  <div class="m-auto my-[110px] mt-12 flex max-w-[1060px] flex-wrap justify-between gap-12">
    <div
      v-for="{ id, label, title, icon } in serviceItems"
      :key="id"
      class="group flex w-[320px] flex-col rounded-2xl border border-cGray bg-white px-6 py-5 hover:shadow-3xl"
    >
      <div
        class="mb-11 flex w-full items-center justify-between text-cGray group-hover:text-cBlack"
      >
        <h6>{{ label }}</h6>
        <!-- <component :is="path" class="h-6 w-6" :alt="`Service_${icon}`" />? -->
        <img :src="`./src/assets/service/${icon}.svg`" :alt="`Service_name_${icon}`" />
      </div>
      <p class="w-[229px] font-sfMedium text-lg">
        {{ title }}
      </p>
      <div class="mt-6 flex gap-4">
        <a href="#" class="text-cGray group-hover:text-cBlack">Batafsil</a>
        <img
          class="text-cGray group-hover:text-cBlack"
          src="../assets/service/arrow.svg"
          alt="Arrow"
        />
      </div>
    </div>
  </div>
</template>
