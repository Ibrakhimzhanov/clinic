<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { personals } from '../data'
import PersonalItem from '@/components/PersonalItem.vue'
import { FIND_DOCTOR } from '../constants'
</script>
<template>
  <SectionHeading :id="FIND_DOCTOR" title="Shifokor topish" />
  <div class="flex flex-col items-center gap-10 px-16">
    <div class="flex w-[1310px] justify-between rounded-3xl bg-[#F8F4FF] px-28 pb-2 pt-12">
      <PersonalItem v-for="item in personals" :key="item.path" :item="item" />
    </div>
    <router-link
      to="/findDoctor"
      class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
    >
      Barchasini ko’rish
    </router-link>
  </div>
</template>
