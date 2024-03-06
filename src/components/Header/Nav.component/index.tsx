import React from 'react'
import { Link } from 'react-router-dom'
import css from './style.module.scss'
import { ENV } from '@src/env'
import { useTranslation } from 'react-i18next'

function Index() {
  const { t } = useTranslation()

  return (
    <ul className={css.nav}>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.HOME} className={css.nav__item_link}>
          {t('header.links.home')}
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.WORKS} className={css.nav__item_link}>
          {t('header.links.works')}
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.ABOUT_ME} className={css.nav__item_link}>
          {t('header.links.about-me')}
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.CONTACTS} className={css.nav__item_link}>
          {t('header.links.contacts')}
        </Link>
      </li>
    </ul>
  )
}

export default Index
