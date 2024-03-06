import React from 'react'
import css from './style.module.scss'
import email from '@src/assets/icons/secondary/Email.svg'
import github from '@src/assets/icons/secondary/Github.svg'
import telegram from '@src/assets/icons/secondary/Telegram.svg'
import { ENV } from '@src/env'

type TLink = {
  href: string
  img: string
  alt: string
  size?: number
}
const Link = ({ href, img, alt, size }: Readonly<TLink>) => (
  <a href={href} title={alt} target="_blank" rel="noopener noreferrer">
    <img style={{ height: size, width: size }} src={img} alt={alt} />
  </a>
)

type TLinks = {
  size?: number
  className?: string
  direction?: 'column' | 'row'
}
function Index({ direction = 'row', size, className }: Readonly<TLinks>) {
  return (
    <div className={css.fixed_links + ' ' + className} style={{ flexDirection: direction }}>
      <Link size={size} href={ENV.MECONTACTS.GITHUB_URL} img={github.toString()} alt="Github" />
      <Link size={size} href={ENV.MECONTACTS.TELEGRAM_URL} img={telegram.toString()} alt="Telegram" />
      <Link size={size} href={'mailto:' + ENV.MECONTACTS.EMAIL} img={email.toString()} alt={ENV.MECONTACTS.EMAIL} />
    </div>
  )
}

export default Index
