import React from 'react'
import Button from '@src/components/Button'
import Container from '@src/components/Container'
import bigLogo from '@src/assets/icons/logo/big_logo_2.svg'
import css from './style.module.scss'
import { ENV } from '@src/env'
import Translate from './Translate'

function Index() {
  const redirect = () => window.open(ENV.MECONTACTS.TELEGRAM_URL)

  return (
    <section>
      <Container className={css.preview}>
        <div className={css.preview__heading}>
          <h1 className={css.preview__heading_title}>
            <Translate trans="title" />
          </h1>
          <p className={css.preview__heading_description}>
            <Translate trans="description" />
          </p>
          <Button onClick={redirect}>
            <Translate trans="button" />
          </Button>
        </div>
        <div className={css.preview__img}>
          <img src={bigLogo.toString()} alt="big logo" />
        </div>
      </Container>
    </section>
  )
}

export default Index
