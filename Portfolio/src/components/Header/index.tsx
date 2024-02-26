import React, { useState } from 'react';
import Container from '@src/components/Container';
import NavComponent from './Nav.component';
import LogoComponent from './Logo.component'
import FixedLinksComponent from './FixedLinks.component';
import LangComponent from './Lang.component';
import css from './style.module.scss';


function Index() {
  const [asideIsVisible, setAsideVisible] = useState(false);

  function toggleAside () {
    setAsideVisible(!asideIsVisible);
  }

  return (
    <header>
      <FixedLinksComponent />
      <Container>
        <div className={ css.header }>
          <LogoComponent />

          <div onClick={ toggleAside } className={ css.header__nav_burger }>
            <div></div>
            <div></div>
          </div>

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