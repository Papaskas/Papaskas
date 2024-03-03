import { defaultNS } from '@src/i18n'
import en from '@src/core/locales/en.json'
import ru from '@src/core/locales/ru.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: {
      en: typeof en
      ru: typeof ru
    }
  }
}
