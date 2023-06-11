// *********** Service ************
import place from '/src/assets/service/place.svg'
import calendar from './assets/service/calendar.svg'
import doc from './assets/service/doc.svg'
import medicament from './assets/service/medicament.svg'
import check from './assets/service/check.svg'
import location from './assets/service/location.svg'
// *********** Peronals ************
import barno from './assets/barno.png'
import natalya from './assets/natalya.png'
import zuxra from './assets/zuxra.png'
import alisher from './assets/alisher.png'
// *********** Doctors ************
import levina from './assets/doctors/item-1.jpg'
import odilova from './assets/doctors/item-4.jpg'
import tolipova from './assets/doctors/item-2.jpg'
import kurbanov from './assets/doctors/item-3.jpg'
import kundregan from './assets/doctors/item-5.jpg'
import kirylo from './assets/doctors/item-6.jpg'
import androsky from './assets/doctors/item-7.jpg'
import hunnings from './assets/doctors/item-8.jpg'
import kitsmiller from './assets/doctors/item-9.jpg'
// ************* Main ***************
import list from './assets/list.svg'
import medical from './assets/medical.svg'
import idea from './assets/idea.svg'
// ************* Our Partners ***************
import people from './assets/ourClients/people.jpg'
import med from './assets/ourClients/med.jpg'
import cincinnati from './assets/ourClients/cincinnati.jpg'
import northwest from './assets/ourClients/northwest.jpg'
import monash from './assets/ourClients/monash.jpg'
import shenzen from './assets/ourClients/shenzen.jpg'

// *********** Service ************
export const serviceItems = {
  service_01: {
    id: 1,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: place
  },

  service_02: {
    id: 2,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: calendar
  },
  service_03: {
    id: 3,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: doc
  },
  service_04: {
    id: 4,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: medicament
  },
  service_05: {
    id: 5,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: check
  },
  service_06: {
    id: 6,
    label: 'Onlayn dorixona',
    title: 'Minglab mutaxassis, umumiy va ishonchli shifoxonalardan shifokoringizni tanlang',
    icon: location
  }
}
// *********** Doctors ************
export const doctors = [
  {
    path: levina,
    name: 'Natalya Levina',
    category: 'Ortodont'
  },
  {
    path: tolipova,
    name: 'Zuxra Tolipova',
    category: 'Okulist'
  },
  {
    path: kurbanov,
    name: 'Alisher Kurbanov',
    category: 'Travmatolog'
  },
  {
    path: odilova,
    name: 'Barno Odilova',
    category: 'Ginekolog'
  },

  {
    path: kundregan,
    name: 'Adelyn Kindregan',
    category: 'Travmatolog'
  },
  {
    path: kirylo,
    name: 'Gabrielle Kirylo',
    category: 'Travmatolog'
  },
  {
    path: androsky,
    name: ' Cameron Androsky',
    category: 'Travmatolog'
  },
  {
    path: hunnings,
    name: 'Fannie Hunnings',
    category: 'Travmatolog'
  },
  {
    path: kitsmiller,
    name: 'Malia Kitsmiller',
    category: 'Travmatolog'
  }
]
export const personals = [
  {
    path: barno,
    name: 'Barno Odilova',
    category: 'Ginekolog'
  },
  {
    path: natalya,
    name: 'Levina',
    category: 'Ortodont'
  },
  {
    path: zuxra,
    name: 'Zuxra Tolipova',
    category: 'Okulist'
  },
  {
    path: alisher,
    name: 'Alisher Kurbanov',
    category: 'Travmatolog'
  }
]
// ************* Main ***************
export const descriptions = [
  {
    title: "Sog'liqni saqlash holati haqida to'liq ma'lumot.",
    icon: list
  },
  {
    title: 'Zamonaviy yuqori aniqlikdagi uskunalar.',
    icon: medical
  },
  {
    title: '2 kunlik dasturni qabul qilish imkoniyati.',
    icon: idea
  }
]
// ************* Our Partners ***************
export const partners = [
  {
    path: people,
    alt: 'People'
  },
  {
    path: med,
    alt: 'Medical'
  },
  {
    path: cincinnati,
    alt: 'Cincinnati Children'
  },
  {
    path: northwest,
    alt: 'Northwest Clinicals'
  },
  {
    path: monash,
    alt: 'MonashHealth'
  },
  {
    path: shenzen,
    alt: 'Shenzen'
  }
]
