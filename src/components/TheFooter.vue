<script setup>
import LogoMain from './LogoMain.vue'
</script>
<template>
  <div
    class="mt-32 flex items-center justify-between rounded-b-none rounded-t-[50px] rounded-tr-[50px] bg-[#E5F0FF] px-[172px] py-16"
  >
    <div class="flex flex-col items-start gap-10">
      <a href="index.html">
        <LogoMain />
      </a>
      <div class="flex flex-col gap-5">
        <span class="max-w-[298px]">Download the app by clicking the link below :</span>
        <div class="flex gap-10">
          <a href="#">
            <img src="../assets/google.jpg" alt="Google Play" />
          </a>
          <a href="#">
            <img src="../assets/apple.jpg" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end gap-5">
      <h6 class="text-lg">Social media</h6>
      <div class="flex items-center gap-5">
        <a href="#">
          <img src="../assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="../assets/twitter.svg" alt="Twitter" />
        </a>
        <a href="#">
          <img src="../assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="../assets/instagram.svg" alt="Instagram" />
        </a>
      </div>
      <span class="mt-10 text-lg"
        >© 2023
        <a class="underline" href="https://www.instagram.com/uzwebblog/"
          >developer by Ibrakhimzhanov</a
        >
        .All Rights Reserved. Co Reg: 685299</span
      >
    </div>
  </div>
</template>
