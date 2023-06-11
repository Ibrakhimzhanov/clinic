<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  find: Boolean
})
const classes = (find) =>
  find
    ? 'mb-12 mt-20 flex items-start justify-start font-sfBold text-5xl'
    : 'mb-12 mt-20 flex items-center justify-center font-sfBold text-5xl'
</script>
<template>
  <h1 :class="classes(find)">{{ title }}</h1>
</template>
