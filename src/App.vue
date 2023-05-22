<script setup></script>

<template>
  <div class="bg-[#E5F0FF] px-16 pt-5 flex flex-col">
    <header class="flex items-center justify-center xl:container mx-auto">
      <div class="w-full bg-white flex items-center justify-around rounded-[2.5rem] px-6 py-2.5">
        <img src="./assets/logo.svg" alt="Logotype" />
        <ul class="flex justify-around w-2/4 font-sfMedium cursor-pointer">
          <li>Asosiy</li>
          <li>Xizmatlar</li>
          <li>Shifokor</li>
          <li>Maqolalar</li>
          <li>Sharhlar</li>
          <li>Biz haqimizda</li>
        </ul>
        <div class="flex items-center gap-4">
          <a href="#" class="border text-[18px] rounded-[3rem] bg-main px-5 py-2 text-md"
            >Ro'yhatdan o'tish
          </a>
          <select
            class="uppercase text-[18px] outline-none border border-main px-4 py-3 rounded-3xl"
          >
            <option value="uzb">uzb</option>
            <option value="rus">rus</option>
          </select>
        </div>
      </div>
    </header>
    <main class="flex items-center justify-between xl:container mx-auto">
      <img src="../src/assets/doc.svg" alt="Doctor" />
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
            <img src="./assets/play.svg" alt="Play" />
          </a>
        </div>
      </div>
    </main>

    <div
      class="w-[1090px] mx-auto bg-white flex items-center justify-center rounded-[2.5rem] py-2.5"
    >
      <div class="flex items-center justify-between w-full py-1.25 px-12 hover:w-110%">
        <div class="flex items-center justify-between gap-7">
          <img src="./assets/list.svg" alt="Sog'liqni saqlash holati haqida to'liq ma'lumot" />
          <div class="relative">
            <span class="bg-black w-1.5 h-1.5 rounded-full absolute -left-[15px] top-[8px]"></span>
            <p class="w-[200px]">Sog'liqni saqlash holati haqida to'liq ma'lumot.</p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-7">
          <img src="./assets/medical.svg" alt="Zamonaviy yuqori aniqlikdagi uskunalar" />
          <div class="relative">
            <span class="bg-black w-1.5 h-1.5 rounded-full absolute -left-[15px] top-[8px]"></span>
            <p class="w-[190px]">Zamonaviy yuqori aniqlikdagi uskunalar</p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-7">
          <img src="./assets/idea.svg" alt="2 kunlik dasturni qabul qilish imkoniyati" />
          <div class="relative">
            <span class="bg-black w-1.5 h-1.5 rounded-full absolute -left-[15px] top-[8px]"></span>
            <p class="w-[170px]">2 kunlik dasturni qabul qilish imkoniyati</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
