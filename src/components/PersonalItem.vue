<script setup>
import arrowD from '@/assets/arrow-dark.svg'
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="flex flex-col items-center">
    <img :src="item.path" :alt="item.name" />
    <div
      class="relative bottom-10 left-[0%] flex w-[203px] items-center justify-between rounded-xl bg-white px-3 py-1.5"
    >
      <div>
        <h6 class="m-0 p-0 font-sfBold text-lg">{{ item.name }}</h6>
        <span class="text-lg text-cGray">{{ item.category }}</span>
      </div>

      <div class="rounded-full bg-main px-2.5 py-2.5">
        <img class="w-[11px] group-hover:text-cBlack" :src="arrowD" alt="Arrow" />
      </div>
    </div>
  </div>
</template>
