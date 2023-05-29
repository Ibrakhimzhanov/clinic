<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <SectionHeading title="Biz haqimizda" />
  <div class="m-auto flex max-w-[1060px] items-center justify-between">
    <div class="flex flex-col items-start justify-between gap-10 font-sfBold">
      <h6 class="text-2xl text-cGray">Clinika nome</h6>
      <h5 class="max-w-[365px] text-3xl">
        Etiam porttitor dui nec metus auctor <span class="text-[#99E9A5]">vestibulum.</span>
      </h5>
      <p class="max-w-[430px] font-sfRegular text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra non lorem nec
        rhoncus. Etiam porttitor dui nec metus auctor vestibulum.
      </p>
      <a
        href="#"
        class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
        >Ro’yhatdan o’tish
      </a>
    </div>
    <div>
      <img src="../assets/about_video.svg" alt="About us Video" />
    </div>
  </div>
</template>
