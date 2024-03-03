import React, { RefObject } from 'react'
import css from './style.module.scss'

interface IButton {
  children: React.JSX.Element | React.JSX.Element[] | string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary' | 'secondary' | 'error'
  disabled?: boolean
  name?: string
  forwardedRef?: RefObject<HTMLButtonElement>
}
function Index({ children, onClick, type = 'button', variant = 'primary', disabled, name, forwardedRef }: Readonly<IButton>) {
  return (
    <button onClick={onClick} className={css.button + ' ' + css[`button_${variant}`]} type={type} disabled={disabled} name={name} ref={forwardedRef}>
      {children}
    </button>
  )
}

export default Index
