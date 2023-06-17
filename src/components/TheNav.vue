<script setup>
import LogoMain from '@/components/LogoMain.vue'
import NavItem from '@/components/NavItem.vue'
// import { ref } from 'vue'
import { MAIN, SERVICE, FEEDBACK, FIND_DOCTOR, ARTICLES, ABOUT } from '../constants.js'

const navItems = [MAIN, SERVICE, FEEDBACK, FIND_DOCTOR, ARTICLES, ABOUT]

// const currentPage = ref(normalizePageHash())

// function normalizePageHash() {
//   const hash = window.location.hash.slice(1)

//   if (navItems.includes(hash)) {
//     return hash
//   }

//   window.location.hash = MAIN

//   return MAIN
// }
</script>

<template>
  <div
    class="bottom-0 z-10 mt-5 flex w-full items-center justify-around rounded-[2.5rem] bg-white px-6 py-2.5"
  >
    <LogoMain />
    <ul class="flex w-2/4 justify-around font-sfMedium">
      <NavItem :to="`/${page}`" v-for="page in navItems" :key="page">
        {{ page }}
      </NavItem>
    </ul>
    <div class="flex items-center gap-4">
      <a href="#" class="text-md rounded-[3rem] border bg-main px-5 py-2 text-[18px]"
        >Ro'yhatdan o'tish
      </a>
      <select class="rounded-3xl border border-main px-4 py-3 text-[18px] uppercase outline-none">
        <option value="uzb">uzb</option>
        <option value="rus">rus</option>
      </select>
    </div>
  </div>
</template>
