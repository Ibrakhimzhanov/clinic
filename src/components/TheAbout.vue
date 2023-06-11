<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { ABOUT } from '../constants'
</script>

<template>
  <SectionHeading :id="ABOUT" title="Biz haqimizda" />
  <div class="m-auto flex max-w-[1060px] items-center justify-between">
    <div class="flex flex-col items-start justify-between gap-10 font-sfBold">
      <h6 class="text-2xl text-cGray">Clinika nomi</h6>
      <h5 class="max-w-[365px] text-3xl">
        Etiam porttitor dui nec metus auctor <span class="text-[#99E9A5]">vestibulum.</span>
      </h5>
      <p class="max-w-[430px] font-sfRegular text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra non lorem nec
        rhoncus. Etiam porttitor dui nec metus auctor vestibulum.
      </p>
      <a
        href="#"
        class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
        >Ro’yhatdan o’tish
      </a>
    </div>
    <div class="relative flex items-end justify-center">
      <img class="rounded-[40px]" src="../assets/video.png" alt="Video" />
      <a
        href="#"
        class="text-md absolute bottom-20 flex items-center gap-2 rounded-[1.25rem] bg-main px-6 py-[0.55rem] font-sfMedium text-[18px]"
        >Videoni ko'rish
        <div
          class="relative rounded-full bg-white px-1.5 py-1.5 before:absolute before:-left-0.5 before:-top-0.5 before:animate-ping before:rounded-full before:border before:border-white before:px-3 before:py-3"
        >
          <img src="@/assets/play-dark.svg" alt="Play" />
        </div>
      </a>
    </div>
  </div>
</template>
