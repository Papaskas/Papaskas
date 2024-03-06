import React from 'react'
import InView from '@src/components/Animations/InView'
import css from './style.module.scss'
import { useTranslation } from 'react-i18next'

function Index() {
  const { t } = useTranslation()

  return (
    <section>
      <div className={css.background_cube} />

      <InView animateName="animate__bounceInLeft" timeBeforeAnimation={1}>
        <article className={css.article}>
          <h2 className={css.article__title}>{t('pages.home.article.author_say')}</h2>
          <p className={css.article__description}>- {t('pages.home.article.author')}</p>
        </article>
      </InView>
    </section>
  )
}

export default Index
