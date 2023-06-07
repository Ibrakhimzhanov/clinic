<script setup>
defineProps({
  onMove: {
    type: Number,
    required: true
  },
  disabledSide: {
    type: String,
    required: true
  },
  currentItem: {
    type: Number,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="custom-layout-header__indicator">
    <slot name="indicator" />
  </div>
  <slot name="track" />
  <div class="flex w-full gap-10">
    <div
      v-for="{ id, label, title, subtitle, p } in cards"
      :key="id"
      class="group flex max-w-[240px] flex-col gap-5 rounded-xl p-5 text-cBlack hover:shadow-3xl"
    >
      <h6 class="font-sfMedium text-xl">{{ title }}</h6>
      <span class="font-sfRegular text-lg">{{ subtitle }}</span>
      <p class="text-cGray">
        {{ p }}
      </p>
      <div class="mt-6 flex gap-4">
        <a href="#" class="text-cGray group-hover:text-cBlack">{{ label }}</a>
        <img
          class="text-cGray group-hover:text-cBlack"
          src="../assets/service/arrow.svg"
          alt="Arrow"
        />
      </div>
    </div>
  </div>
  <div class="flex">
    <div class="m-1.5 bg-[#6366f1] p-2.5" @click="onMove(-1)">
      {{ '<' }}
    </div>
    <div class="m-1.5 bg-[#6366f1] p-2.5" @click="onMove(1)">
      {{ '>' }}
    </div>
  </div>
</template>
