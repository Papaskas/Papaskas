import React from 'react'
import Container from '@src/components/Container'
import Button from '@src/components/Button'
import bigLogo from '@src/assets/icons/logo/big_logo_2.svg'
import css from './style.module.scss'
import { ENV } from '@src/ENV'

function Index() {
  const redirect = () => window.open(ENV.MECONTACTS.TELEGRAM_URL)

  return (
    <section>
      <Container className={css.preview}>
        <div className={css.preview__heading}>
          <h1 className={css.preview__heading_title}>
            Hello! My name is <span>Pavel</span> and i'm a <span>web developer</span>
          </h1>
          <p className={css.preview__heading_description}>
            Organized, with deep knowledge of TypeScript and React. I have experience in Fullstack development: Express, Laravel, Django. I show initiative in
            software development and code optimization. I read technical literature and like to understand different technologies
          </p>
          <Button onClick={redirect}>Contact me !!</Button>
        </div>
        <div className={css.preview__img}>
          <img src={bigLogo.toString()} alt="big logo" />
        </div>
      </Container>
    </section>
  )
}

export default Index
