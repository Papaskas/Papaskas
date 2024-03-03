import React from 'react'
import Container from '@src/components/Container'
import css from './style.module.scss'

type TPageHeading = {
  children: string
}
function Index({ children }: Readonly<TPageHeading>) {
  return (
    <Container>
      <h1 className={css.page_heading}>{children}</h1>
    </Container>
  )
}

export default Index
