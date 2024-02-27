import React from 'react';
import Container from '@src/components/Container';
import LogoComponent from '@src/components/Header/Logo.component';
import github from '@src/assets/icons/secondary/Github.svg';
import email from '@src/assets/icons/secondary/Email.svg';
import telegram from '@src/assets/icons/secondary/Telegram.svg';
import css from './style.module.scss';


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
function Index() {
  return (
    <footer>
      <hr className={ css.footer__hr } />
      <Container className={ css.footer }>

        <div className={ css.footer__head }>
          <div className={ css.footer__head__logo }>
            <LogoComponent />
            <p>Web developer</p>
          </div>

          <div className={ css.footer__head__media }>
            <h3 className={ css.footer__head__media__title }>Media</h3>
            <ul className={ css.footer__head__media__links }>
              <li><Link href="https://github.com/Papaskas" img={ github.toString() } alt="github" /></li>
              <li><Link href="https://t.me/Papaskas" img={ telegram.toString() } alt="telegram" /></li>
              <li><Link href="mailto:papaskaaaa@gmail.com" img={ email.toString() } alt="papaskaaaa@gmail.com" /></li>
            </ul>
          </div>
        </div>

        <div className={ css.footer__copyright }>
          &copy; Copyright { new Date().getFullYear() }. Made by Papaska
        </div>
      </Container>
    </footer>
  );
}

export default Index;