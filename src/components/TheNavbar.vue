<script setup>
import LogoMain from '@/components/LogoMain.vue'
import NavbarItems from '@/components/NavbarItems.vue'
</script>

<template>
  <div class="w-full bg-white flex items-center justify-around rounded-[2.5rem] px-6 py-2.5 mt-5">
    <LogoMain />
    <NavbarItems />
    <div class="flex items-center gap-4">
      <a href="#" class="border text-[18px] rounded-[3rem] bg-main px-5 py-2 text-md"
        >Ro'yhatdan o'tish
      </a>
      <select class="uppercase text-[18px] outline-none border border-main px-4 py-3 rounded-3xl">
        <option value="uzb">uzb</option>
        <option value="rus">rus</option>
      </select>
    </div>
  </div>
</template>
