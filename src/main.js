import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/main.css'
import TheMainPage from '@/components/TheMainPage.vue'

const navItems = [
  'Asosiy',
  'Xizmatlar',
  'Sharhlar',
  'Shifokor topish',
  'Maqolalar',
  'Biz haqimizda'
]
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TheMainPage
    },
    {
      path: '/find-doc',
      component: () => import('@/pages/FindDoctor.vue')
    },
    {
      path: '/find-doc-info',
      component: () => import('@/pages/FindDoctorInfo.vue')
    },
    {
      path: '/find-doc-appointment',
      component: () => import('@/pages/FindDoctorAppointment.vue')
    },
    {
      path: '/Asosiy',
      component: () => import('@/components/TheMainPage.vue')
    },
    {
      path: '/Xizmatlar',
      component: () => import('@/components/TheService.vue')
    },
    {
      path: '/Sharhlar',
      component: () => import('@/components/TheFeedback.vue')
    },
    {
      path: '/Shifokor topish',
      component: () => import('@/components/TheFindDoc.vue')
    },
    {
      path: '/Maqolalar',
      component: () => import('@/components/TheArticles.vue')
    },
    {
      path: '/Biz haqimizda',
      component: () => import('@/components/TheAbout.vue')
    }
  ],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
