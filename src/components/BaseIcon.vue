<script setup>
import { computed } from 'vue'
import icons from '../icons.js'
defineProps({
  name: String,
  isViewBox: Boolean
  // validator:
})
const path = computed(() => {
  return icons[this.name]
})
const viewBox = () => (this.isViewBox ? ['0 0 24 24'] : ['0 0 20 20'])
</script>
<template>
  <svg
    :class="$attrs.class || 'h-6 w-6'"
    :fill="$attrs.fill || 'currentColor'"
    :stroke="$attrs.stroke || ''"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>
