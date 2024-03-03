import React from 'react'
import { Link } from 'react-router-dom'
import css from './style.module.scss'
import { ENV } from '@src/ENV'

function Index() {
  return (
    <ul className={css.nav}>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.HOME} className={css.nav__item_link}>
          home
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.WORKS} className={css.nav__item_link}>
          works
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.ABOUT_ME} className={css.nav__item_link}>
          about-me
        </Link>
      </li>
      <li className={css.nav__item}>
        <Link to={ENV.LINKS.CONTACTS} className={css.nav__item_link}>
          contacts
        </Link>
      </li>
    </ul>
  )
}

export default Index
