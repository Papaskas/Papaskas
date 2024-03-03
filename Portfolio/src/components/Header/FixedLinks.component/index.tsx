import React from 'react'
import css from './style.module.scss'
import Links from '@src/components/Links'

function Index() {
  return (
    <div className={css.fixed_links}>
      <div className={css.fixed_links__line} />

      <Links direction="column" />
    </div>
  )
}

export default Index
