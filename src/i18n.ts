import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { ENV } from '@src/env'

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: ENV.DEBUG,
  fallbackLng: 'en-US',
  lowerCaseLng: true,
  cleanCode: true,
})

export default i18next
