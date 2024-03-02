import React from 'react';
import css from './style.module.scss';
import email from '@src/assets/icons/secondary/Email.svg';
import github from '@src/assets/icons/secondary/Github.svg';
import telegram from '@src/assets/icons/secondary/Telegram.svg';


type TLink = {
  href: string;
  img: string;
  alt: string;
  size?: number
}
const Link = ({ href, img, alt, size }: Readonly<TLink>) => (
  <a
    href={ href }
    title={ alt }
    target="_blank"
    rel="noopener noreferrer"
  >
    <img style={{ height: size, width: size }} src={ img } alt={ alt } />
  </a>
)

type TLinks = {
  direction?: 'column' | 'row';
  size?: number;
  className?: string;
}
function Index({ direction = 'row', size, className }: Readonly<TLinks>) {
  return (
    <div className={ css.fixed_links + ' ' + className } style={{ flexDirection: direction }}>
      <Link size={size} href="https://github.com/Papaskas" img={ github.toString() } alt="Github" />
      <Link size={size} href="https://t.me/Papaskas" img={ telegram.toString() } alt="Telegram" />
      <Link size={size} href="mailto:papaskaaaa@gmail.com" img={ email.toString() } alt="papaskaaaa@gmail.com" />
    </div>
  );
}

export default Index;