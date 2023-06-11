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
const cards = [
  {
    id: 0,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    p: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 1,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    p: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 2,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    p: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 3,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    p: "123 Yuzingiz va tanangiz qanday ko'rinishini tasavvurYuzingiz va tanangiz qanday ko'rinishini tasavvurYuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  }
]
</script>
<template>
  <div class="custom-layout-header__indicator">
    <slot name="indicator" />
  </div>
  <slot name="track" />
  <div class="flex w-full gap-10"></div>
  <div class="flex">
    <div class="m-1.5 bg-[#6366f1] p-2.5" @click="onMove(-1)">
      {{ '<' }}
    </div>
    <div class="m-1.5 bg-[#6366f1] p-2.5" @click="onMove(1)">
      {{ '>' }}
    </div>
  </div>
</template>
