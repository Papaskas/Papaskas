import translation from '@src/locales/en-US/translation.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    fallbackNS: 'fallback'
    resources: {
      translation: typeof translation
    }
  }
}
