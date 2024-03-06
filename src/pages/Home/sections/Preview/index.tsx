import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@src/components/Button'
import Container from '@src/components/Container'
import bigLogo from '@src/assets/icons/logo/big_logo_2.svg'
import css from './style.module.scss'
import { ENV } from '@src/env'

function Index() {
  const { t } = useTranslation()
  const redirect = () => window.open(ENV.MECONTACTS.TELEGRAM_URL)

  return (
    <section>
      <Container className={css.preview}>
        <div className={css.preview__heading}>
          <h1 className={css.preview__heading_title}>
            {t('pages.home.preview.title.1')}
            <span>{t('me.name')}</span>
            {t('pages.home.preview.title.2')}
            <span>{t('me.profession')}</span>
          </h1>
          <p className={css.preview__heading_description}>{t('pages.home.preview.description')}</p>
          <Button onClick={redirect}>{t('pages.home.preview.button')}</Button>
        </div>
        <div className={css.preview__img}>
          <img src={bigLogo.toString()} alt="big logo" />
        </div>
      </Container>
    </section>
  )
}

export default Index
