<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <SectionHeading title="Kontaktlarimiz" />
  <div class="m-auto flex max-w-[1090px] items-center justify-between">
    <div class="flex flex-col items-start justify-between gap-10 font-sfBold">
      <h6 class="text-2xl text-cGray">Clinika nomi</h6>
      <h5 class="max-w-[237px] text-2xl">R86H+P99, Андижан, Узбекистан</h5>
      <span class="text-lg text-cGray">Index115516</span>
      <span class="font-sfMedium text-2xl">Telefon raqamlarimiz</span>
      <div class="flex flex-col gap-2">
        <a
          href="#"
          class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
          >+7 (985) 505-57-76
        </a>
        <a
          href="#"
          class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
          >+7 (985) 505-57-76
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-12">
      <img src="../assets/map.jpg" alt="Map" />
      <img src="../assets/questions.jpg" alt="Question" />
    </div>
  </div>
</template>
