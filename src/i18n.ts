import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { ENV } from '@src/env'
import enTranslation from '@src/locales/en-US/translation.json'
import ruTranslation from '@src/locales/ru-RU/translation.json'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: ENV.DEBUG,
    fallbackLng: 'en-US',
    defaultNS: 'translation',
    cleanCode: true,
    ns: ['translation'],
    resources: {
      'en-US': {
        translation: enTranslation,
      },
      'ru-RU': {
        translation: ruTranslation,
      },
    },
  })

export default i18next
