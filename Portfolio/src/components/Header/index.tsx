import React from 'react';
import Container from '@src/components/Container';
import NavComponent from './Nav.component';
import LogoComponent from './Logo.component'
import FixedLinksComponent from './FixedLinks.component';
import LangComponent from './Lang.component';
import css from './style.module.scss';



function Index() {
  return (
    <header>
      <FixedLinksComponent />
      <Container>
        <div className={ css.header }>
          <LogoComponent />
          <div className={ css.header__nav }>
            <NavComponent />
            <LangComponent />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Index;