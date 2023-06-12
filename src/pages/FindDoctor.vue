<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { ref } from 'vue'
import { doctors } from '@/data'
const services = [
  'Barcha shifokorlar',
  'Terapevt',
  'Nevrolog',
  'Xirurg',
  'Urolog',
  'Stamotolog',
  '+38'
]

const activeProfession = ref('Barcha shifokorlar')
</script>
<template>
  <div class="m-auto flex max-w-[1090px] flex-col items-start justify-start">
    <div class="flex w-full flex-col justify-between">
      <SectionHeading
        class="w-full border border-b-2 border-transparent border-b-black pb-14"
        title="Shifokor topish"
        :find="true"
      />
      <div class="flex w-full justify-between">
        <a
          v-for="profession in services"
          :key="profession"
          :class="{ 'bg-main': activeProfession === profession }"
          @click="activeProfession = profession"
          href="#"
          class="text-md flex items-center justify-center rounded-[1.25rem] border border-transparent bg-[#F8F4FF] px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
          >{{ profession }}
        </a>
      </div>
    </div>
    <div class="mt-20 flex flex-wrap items-center justify-between gap-10">
      <div
        v-for="item in doctors"
        :key="item.name"
        class="group flex h-[473px] max-w-[320px] flex-col items-center rounded-3xl shadow-DoctorsShadow"
      >
        <img class="rounded-2xl" :src="item.path" :alt="item.name" />
        <div class="w-full px-5 py-2">
          <h6 class="m-0 p-0 font-sfBold text-xl">{{ item.name }}</h6>
          <span class="w-full text-lg text-cGray">{{ item.category }}</span>
          <div class="mt-5 text-sm text-cGray group-hover:text-black">
            Bu bolalik orzusi edi, yoshligimdan shifokor bo'lishimni aniq bilardim. Barchangizni
            berib, odamlarga yordam bering. . . . .
          </div>
          <div class="mt-6 flex gap-4">
            <router-link to="/FindDoctorInfo" class="text-cGray group-hover:text-cBlack"
              >Batafsil</router-link
            >
            <img
              class="text-cGray group-hover:text-cBlack"
              src="@/assets/service/arrow.svg"
              alt="Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
