import React from 'react'
import Dropdown from '@src/components/Dropdown'
import i18n from '@src/i18n'
import { useTranslation } from 'react-i18next'

function Index() {
  const { t } = useTranslation()

  return (
    <Dropdown title={t('header.lang')}>
      <button onClick={() => i18n.changeLanguage('ru-RU')}>RU</button>
      <button onClick={() => i18n.changeLanguage('en-US')}>EN</button>
    </Dropdown>
  )
}

export default Index
