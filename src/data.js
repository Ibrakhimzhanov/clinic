import place from '/src/assets/service/place.svg'
import calendar from '/src/assets/service/calendar.svg'
import doc from '/src/assets/service/doc.svg'
import medicament from '/src/assets/service/medicament.svg'
import check from '/src/assets/service/check.svg'
import location from '/src/assets/service/location.svg'
import barno from '/src/assets/barno.png'
import natalya from '/src/assets/natalya.png'
import zuxra from '/src/assets/zuxra.png'
import alisher from '/src/assets/alisher.png'

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
