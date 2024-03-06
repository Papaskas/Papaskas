import React from 'react'
import Container from '@src/components/Container'
import LogoComponent from '@src/components/Header/Logo.component'
import Links from '@src/components/Links'
import css from './style.module.scss'
import { useTranslation } from 'react-i18next'

function Index() {
  const { t } = useTranslation()

  return (
    <footer>
      <hr className={css.footer__hr} />
      <Container className={css.footer}>
        <div className={css.footer__head}>
          <div className={css.footer__head__logo}>
            <LogoComponent />
            <p>{t('me.profession')}</p>
          </div>

          <div className={css.footer__head__media}>
            <h3 className={css.footer__head__media__title}>{t('footer.media')}</h3>
            <Links />
          </div>
        </div>

        <div className={css.footer__copyright}>&copy; Copyright {new Date().getFullYear()}. Made by Papaska</div>
      </Container>
    </footer>
  )
}

export default Index
