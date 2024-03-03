import React, { useState, JSX } from 'react'
import arrowGray from '@src/assets/icons/ArrowGray.svg'
import arrowSecondary from '@src/assets/icons/ArrowSecodary.svg'
import css from './style.module.scss'

type TDropdown = {
  title: string
  children: JSX.Element[] | JSX.Element
}
function Index({ title, children }: Readonly<TDropdown>) {
  const [isActive, setActive] = useState(false)

  return (
    <div className={css.dropdown}>
      <button className={css.dropdown__button} onClick={() => setActive(!isActive)}>
        <div className={isActive ? css.dropdown__button_active + ' ' + css.dropdown__button_title : css.dropdown__button_title}>{title}</div>
        <img src={isActive ? arrowSecondary.toString() : arrowGray.toString()} alt="" className={isActive ? css.dropdown__button__img_active : undefined} />
      </button>

      <div className={isActive ? css.show + ' ' + css.dropdown__item_wrapper : css.dropdown__item_wrapper}>{children}</div>
    </div>
  )
}

export default Index
