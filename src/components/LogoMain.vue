<script setup>
// import { ref } from 'vue'

// const currentPage = ref(window.location.hash.slice(1))
</script>

<template>
  <router-link :to="{ name: 'Home' }" @click="currentPage">
    <img src="@/assets/logo.svg" alt="Logotype" />
  </router-link>
</template>
