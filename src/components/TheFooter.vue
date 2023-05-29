<script setup>
import LogoMain from './LogoMain.vue'
</script>
<template>
  <div
    class="mt-32 flex items-center justify-between rounded-b-none rounded-t-[50px] rounded-tr-[50px] bg-[#E5F0FF] px-[172px] py-16"
  >
    <div class="flex flex-col items-start gap-10">
      <LogoMain />
      <div class="flex flex-col gap-5">
        <span class="max-w-[298px]">Download the app by clicking the link below :</span>
        <div class="flex gap-10">
          <img src="../assets/google.jpg" alt="Google Play" />
          <img src="../assets/apple.jpg" alt="App Store" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end gap-5">
      <h6 class="text-lg">Social media</h6>
      <div class="flex items-center gap-5">
        <img src="../assets/facebook.svg" alt="Facebook" />
        <img src="../assets/twitter.svg" alt="Twitter" />
        <img src="../assets/linkedin.svg" alt="LinkedIn" />
        <img src="../assets/instagram.svg" alt="Instagram" />
      </div>
      <span class="mt-10 text-lg"
        >© 2023 Asset Class Limited.All Rights Reserved. Co Reg: 685299</span
      >
    </div>
  </div>
</template>
