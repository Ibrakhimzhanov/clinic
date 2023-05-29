<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h1 class="mb-12 mt-20 flex items-center justify-center font-sfBold text-5xl">{{ title }}</h1>
</template>
