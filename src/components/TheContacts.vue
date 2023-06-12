<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

const questions = reactive([
  {
    title: 'Qanday borish mumkin?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false // Initial value
  },
  {
    title: 'Mashina uchun turar joy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  }
])
function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}
</script>

<template>
  <SectionHeading title="Kontaktlarimiz" />
  <div class="m-auto flex max-w-[1090px] items-center justify-between">
    <div class="flex flex-col items-start justify-between gap-10 font-sfBold">
      <h6 class="text-2xl text-cGray">Clinika nomi</h6>
      <h5 class="max-w-[237px] text-2xl">R86H+P99, Андижан, Узбекистан</h5>
      <span class="text-lg text-cGray">Index115516</span>
      <span class="font-sfMedium text-2xl">Telefon raqamlarimiz</span>
      <div class="flex flex-col gap-2">
        <a
          href="tel:+79855055776"
          class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
          >+7 (985) 505-57-76
        </a>
        <a
          href="tel:+79855055776"
          class="text-md flex items-center justify-center rounded-[1.25rem] border bg-main px-[1.9rem] py-[0.665rem] font-sfMedium text-[18px]"
          >+7 (985) 505-57-76
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-12">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.5524872167284!2d72.32787849583231!3d40.81154650344126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc945555555555%3A0x9ff5d287453939eb!2sAndijon%20davlat%20tibbiyot%20instituti!5e0!3m2!1sru!2s!4v1686449839326!5m2!1sru!2s"
          width="650"
          height="450"
          style="border: 0; border-radius: 40px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="flex h-[100px] w-[650px] flex-col gap-1">
        <div
          v-for="(question, index) in questions"
          :class="`${
            questions[index].isExpanded ? 'bg-[#F8F4FF]' : 'bg-white'
          } flex w-full flex-col items-start gap-5 rounded-[15px] border border-[#F8F4FF]  px-9 py-3.5 text-xl`"
          :key="question.title"
        >
          <button
            class="flex w-full items-center justify-between"
            @click="() => handleAccordion(index)"
          >
            {{ question.title }}
            <div v-if="questions[index].isExpanded">
              <img src="@/assets/minus.svg" alt="Minus" />
            </div>
            <div v-else>
              <img src="@/assets/plus.svg" alt="Plus" />
            </div>
          </button>

          <Collapse :when="questions[index].isExpanded" class="v-collapse">
            <p>
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.v-collapse {
  transition: height 300ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>
