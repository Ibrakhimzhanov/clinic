<template>
  <div class="m-auto flex max-w-[1090px] items-center justify-around p-[50px]">
    <div class="flex w-full justify-between">
      <div class="flex flex-col gap-5">
        <img src="../assets/barno.png" alt="Barno Odilova" />
        <router-link
          to="/findDoctorAppointment"
          href="#"
          class="flex items-center justify-center rounded-[20px] border border-transparent bg-main px-[1.9rem] py-[0.665rem] text-lg"
        >
          Qabulga yozilish
        </router-link>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col gap-5 rounded-[20px] border border-[#f8f4ff] p-[20px]">
          <h6 class="m-0 p-0 font-sfBold text-3xl">Natalya Levina</h6>
          <span class="w-full text-2xl text-cGray">Ortodont</span>
          <p class="mt-5 max-w-[542px] text-[16px] text-cGray group-hover:text-black">
            Bu bolalik orzusi edi, yoshligimdan shifokor bo'lishimni aniq bilardim. Barchangizni
            berib, odamlarga yordam bering. Men uchun eng oliy mukofot - bemorning sog'lom go'zal
            tabassumdan quvonchini ko'rishdir.
          </p>
        </div>
        <div class="flex flex-col gap-4 p-[20px]">
          <h6 class="my-5 font-sfMedium text-2xl">Ta'lim muassasalari va kurslar</h6>
          <span>I.M.Sechenov nomidagi Birinchi Moskva davlat tibbiyot universiteti, 2017 yil </span>
          <p>
            A.I. nomidagi Moskva davlat tibbiyot va stomatologiya universitetida rezidentura.
            Evdokimov, 2019 yil
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
