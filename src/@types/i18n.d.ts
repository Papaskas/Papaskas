import en from '../../public/locales/en-US/translation.json'
import ru from '../../public/locales/ru-RU/translation.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      'en-US': typeof en
      'ru-RU': typeof ru
    }
  }
}
