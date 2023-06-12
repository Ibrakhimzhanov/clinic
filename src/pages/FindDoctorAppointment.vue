<template>
  <div class="m-auto flex max-w-[1090px] items-center justify-around p-[50px]">
    <div class="flex w-full justify-between">
      <div class="flex flex-col gap-5">
        <img src="../assets/barno.png" alt="Barno Odilova" />
        <router-link
          to="/findDoctorThanks"
          href="#"
          class="flex items-center justify-center rounded-[20px] border border-transparent bg-main px-[1.9rem] py-[0.665rem] text-lg"
        >
          Qabulga yozilish
        </router-link>
      </div>
      <div class="flex w-3/4 flex-col">
        <div class="flex flex-col gap-2 rounded-[20px] border border-[#f8f4ff] p-[20px]">
          <h6 class="m-0 p-0 font-sfBold text-3xl">Qabulga yozilish</h6>
          <span class="w-full text-2xl text-cGray">Ortodont</span>
          <input
            class="ml-5 mt-5 h-[150px] max-w-[611px] bg-[#e6e6e6] p-0 outline-none"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>
