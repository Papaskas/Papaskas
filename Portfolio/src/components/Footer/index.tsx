import React from 'react';
import Container from '@src/components/Container';
import LogoComponent from '@src/components/Header/Logo.component';
import Links from '@src/components/Links';
import css from './style.module.scss';


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

            <Links />
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
