<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { personals } from '../data.js'
import arrowD from '../assets/arrow-dark.svg'
</script>
<template>
  <SectionHeading title="Shifokor topish" />
  <div class="flex flex-col items-center gap-10 px-16">
    <div class="flex w-[1310px] justify-between rounded-3xl bg-[#F8F4FF] px-28 pb-2 pt-12">
      <div
        v-for="{ path, name, category } in personals"
        :key="name"
        class="flex flex-col items-center"
      >
        <img :src="path" :alt="name" />
        <div
          class="relative bottom-10 left-[0%] flex w-[203px] items-center justify-between rounded-xl bg-white px-3 py-1.5"
        >
          <div>
            <h6 class="m-0 p-0 font-sfBold text-lg">{{ name }}</h6>
            <span class="text-lg text-cGray">{{ category }}</span>
          </div>

          <div class="rounded-full bg-main px-2.5 py-2.5">
            <img class="w-[11px] group-hover:text-cBlack" :src="arrowD" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
    <a
      href="#"
      class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
      >Barchasini ko’rish
    </a>
  </div>
</template>
