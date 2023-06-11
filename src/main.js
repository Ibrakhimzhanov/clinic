import { createApp } from 'vue'
import App from './App.vue'
import MainPage from './components/TheMainPage.vue'
import FindDoctor from './pages/FindDoctor.vue'
import FindDoctorInfo from './pages/FindDoctorInfo.vue'
// import TheOurPartner from '@/components/TheOurPartner.vue'
// import TheAbout from '@/components/TheAbout.vue'
// import ThePersonal from '@/components/ThePersonal.vue'
// // import TheHeader from '@/components/TheHeader.vue'
// import TheArticles from '@/components/TheArticles.vue'
// import TheFeedback from '@/components/TheFeedback.vue'
// import TheContacts from '@/components/TheContacts.vue'
import '@/assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/findDoctor',
      name: 'Shifokor Topish',
      component: FindDoctor
    },
    {
      path: '/findDoctorInfo',
      name: 'Shifokor Batafsil',
      component: FindDoctorInfo
    }
  ],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
