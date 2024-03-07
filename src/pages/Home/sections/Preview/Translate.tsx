import React from 'react'
import { useTranslation } from 'react-i18next'

type TTranslate = {
  trans: 'title' | 'description' | 'button'
}
function Translate({ trans }: Readonly<TTranslate>) {
  const { t } = useTranslation()

  switch (trans) {
    case 'button':
      return <>{t('pages.home.preview.button')}</>
    case 'description':
      return <>{t('pages.home.preview.description')}</>
    case 'title':
      return (
        <>
          {t('pages.home.preview.title.1')}
          <span>{t('me.name')}</span>
          {t('pages.home.preview.title.2')}
          <span>{t('me.profession')}</span>
        </>
      )
  }
}

export default Translate
