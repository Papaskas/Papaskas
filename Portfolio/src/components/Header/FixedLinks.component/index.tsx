import React from 'react';
import css from './style.module.scss';
import email from '@src/assets/icons/secondary/Email.svg';
import github from '@src/assets/icons/secondary/Github.svg';
import telegram from '@src/assets/icons/secondary/Telegram.svg';


type TLink = {
  href: string;
  img: string;
  alt: string;
}
function Link ({ href, img, alt }: Readonly<TLink>) {
  return (
    <a href={ href } title={ alt } target="_blank" rel="noopener noreferrer"><img src={ img } alt={ alt } /></a>
  )
}

const links: TLink[] = [
  { href: 'https://github.com/Papaskas', img: github.toString(), alt: 'github' },
  { href: 'https://t.me/Papaskas', img: telegram.toString(), alt: 'telegram' },
  { href: 'mailto:papaskaaaa@gmail.com', img: email.toString(), alt: 'papaskaaaa@gmail.com' },
]
function Index() {
  return (
    <div className={ css.fixed_links }>
      <div className={ css.fixed_links__line } />
      <div className={ css.fixed_links__items }>

        {links.map((el) =>
          <Link
            key={ el.alt }
            href={ el.href }
            img={ el.img.toString() }
            alt={ el.alt }
          />
        )}

      </div>
    </div>
  );
}

export default Index;