<script setup>
import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide } from 'vue3-carousel'
// import { ref } from 'vue'
import { FEEDBACK } from '../constants'

// let currentSlide = ref(0)
// const slideTo = (val) => (this.currentSlide = val)
// const slideUsers = [
//   {
//     id: 0,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 1,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 2,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 3,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 4,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 5,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   },
//   {
//     id: 6,
//     name: 'Iqbol Xoliqov',
//     position: 'Shifokor Nevropotolog'
//   }
// ]
// const slideDescribes = [
//   {
//     title: "Bu ajoyib tajriba bo'ldi",
//     rate: '★★★★★★',
//     description:
//       "Ularning aksariyati xorijiy yetakchi klinikalarda amaliyot o'tagan va ish tajribasiga ega bo'lgan fan doktori nomzodlari. Yuqori professionallik va so'nggi tadqiqot usullari bizga nafaqat tashxis qo'yish, balki turli darajadagi murakkablikdagi kasalliklarga chalingan bemorlarni juda samarali davolash imkonini beradi. Agar siz sog'liq muammolari bilan bezovtalansangiz-biz bilan bog'laning, biz sizga yordam beramiz! Kabinetlar 'Siemens' (Germaniya), 'Flibs' (Niderlandiya), 'Drager' (Germaniya), 'Karl Storz' (Germaniya) kabi brendlar ostida Yevropa sifatidagi eng zamonaviy uskunalar bilan jihozlangan bo'lib, bu barcha zarur tadqiqotlarni sifatli va tezkor o'tkazish, buzilish va patologiyalarni aniqlash, davolash jarayonini kuzatib borish va kasalliklarning yanada rivojlanishiga yo'l qo'ymaslik imkonini beradi."
//   }
// ]
</script>
<template>
  <div
    :id="FEEDBACK"
    class="m-auto my-28 flex h-[500px] w-[1310px] flex-col items-center justify-around bg-[#F8F4FF] shadow-OurShadow"
  >
    <!-- <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="slide in slideDescribes" :key="slide.id">
        <div class="gap-5">{{ slide.title }}</div>
        <div>{{ slideDescribes.rate }}</div>
        <div>{{ slide.description }}</div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="slide in slideUsers" :key="slide.id">
        <div class="carousel__item rounded-3xl bg-red-500" @click="slideTo(slide - 1)">
          {{ slide.name }}
        </div>
      </Slide>
    </Carousel> -->
    <img src="@/assets/feedback.jpg" alt="Feedback from our customers" />
  </div>
</template>
<style scoped></style>
