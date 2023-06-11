<script setup>
import { descriptions } from '../data.js'
</script>
<template>
  <main class="mx-auto flex h-full flex-col items-center justify-between xl:container">
    <div class="flex h-full w-full items-center justify-end">
      <div class="absolute left-80 top-20">
        <img src="@/assets/doc.svg" alt="Doctor" />
      </div>
      <div class="flex flex-col gap-10">
        <h1 class="max-w-[592px] font-sfBold text-6xl">
          Ko'p tarmoqli tibbiyot klinikalari tarmog'i
        </h1>
        <p class="max-w-[522px] text-xl">
          "Siemens", "Flibs", "Drager", "Karl Storz" kabi brendlar ostida Yevropa sifatidagi eng
          zamonaviy uskunalar bilan jihozlangan
        </p>
        <div class="flex items-center gap-5">
          <a
            href="#"
            class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
            >Xizmatlar haqida
          </a>
          <a
            href="#"
            class="text-md flex items-center gap-2 rounded-[1.25rem] border border-black px-6 py-[0.55rem] font-sfMedium text-[18px]"
            >Videoni ko'rish
            <img src="@/assets/play.svg" alt="Play" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="absolute -bottom-10 mx-auto flex w-[1090px] items-center justify-center rounded-[2.5rem] bg-white py-2.5"
    >
      <div class="py-1.25 hover:w-110% flex w-full items-center justify-between px-12">
        <div
          class="flex items-center justify-between gap-7"
          v-for="{ title, icon } in descriptions"
          :key="title"
        >
          <img :src="icon" :alt="title" />
          <div class="relative">
            <span class="absolute -left-[15px] top-[8px] h-1.5 w-1.5 rounded-full bg-black"></span>
            <p class="w-[200px]">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
