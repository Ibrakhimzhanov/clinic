<script setup>
const descriptions = [
  { title: "Sog'liqni saqlash holati haqida to'liq ma'lumot.", icon: './src/assets/list.svg' },
  { title: 'Zamonaviy yuqori aniqlikdagi uskunalar.', icon: './src/assets/medical.svg' },
  { title: '2 kunlik dasturni qabul qilish imkoniyati.', icon: './src/assets/idea.svg' }
]
</script>
<template>
  <main class="flex flex-col h-full items-center justify-between xl:container mx-auto">
    <div class="flex items-center justify-end w-full h-full bg-orange-300">
      <div class="absolute top-20 left-80">
        <img src="@/assets/doc.svg" alt="Doctor" />
      </div>
      <div class="flex flex-col gap-10">
        <h1 class="text-6xl font-sfBold max-w-[592px]">
          Ko'p tarmoqli tibbiyot klinikalari tarmog'i
        </h1>
        <p class="text-xl max-w-[522px]">
          "Siemens", "Flibs", "Drager", "Karl Storz" kabi brendlar ostida Yevropa sifatidagi eng
          zamonaviy uskunalar bilan jihozlangan
        </p>
        <div class="flex items-center gap-5">
          <a
            href="#"
            class="flex items-center justify-center border text-[18px] font-sfMedium rounded-[1.25rem] bg-main px-[1.9rem] py-[0.665rem] text-md"
            >Xizmatlar haqida
          </a>
          <a
            href="#"
            class="flex items-center font-sfMedium gap-2 border border-black text-[18px] rounded-[1.25rem] px-6 py-[0.55rem] text-md"
            >Videoni ko'rish
            <img src="@/assets/play.svg" alt="Play" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-[1090px] mx-auto bg-white flex items-center justify-center rounded-[2.5rem] py-2.5 absolute -bottom-10"
    >
      <div class="flex items-center justify-between w-full py-1.25 px-12 hover:w-110%">
        <div
          class="flex items-center justify-between gap-7"
          v-for="{ title, icon } in descriptions"
          :key="title"
        >
          <img :src="`${icon}`" alt="Sog'liqni saqlash holati haqida to'liq ma'lumot" />
          <div class="relative">
            <span class="bg-black w-1.5 h-1.5 rounded-full absolute -left-[15px] top-[8px]"></span>
            <p class="w-[200px]">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
