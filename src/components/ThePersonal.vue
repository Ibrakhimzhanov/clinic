<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
// import Barno from '../assets/Barno.png'
// import Natalya from '../assets/Natalya.png'
// import Zuxra from '../assets/Zuxra.png'
// import Alisher from '../assets/Alisher.png'
import arrowD from '../assets/arrow-dark.svg'
const personals = [
  {
    path: 'barno',
    name: 'Barno Odilova',
    category: 'Ginekolog'
  },
  {
    path: 'Natalya',
    name: ' Levina',
    category: 'Ortodont'
  },
  {
    path: 'Zuxra',
    name: 'Zuxra Tolipova',
    category: 'Okulist'
  },
  {
    path: 'Alisher',
    name: 'Alisher Kurbanov',
    category: 'Travmatolog'
  }
]
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
        <img :src="`src/assets/${path}.png`" :alt="name" />
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
