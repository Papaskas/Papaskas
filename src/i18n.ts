import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@src/core/locales/en.json'
import ru from '@src/core/locales/ru.json'

export const defaultNS = 'en'

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  defaultNS,
  resources: {
    en,
    ru,
  },
})

export default i18next
