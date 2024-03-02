import React, { useState, useRef } from 'react';
import Container from '@src/components/Container';
import NavComponent from './Nav.component';
import LogoComponent from './Logo.component'
import FixedLinksComponent from './FixedLinks.component';
import LangComponent from './Lang.component';
import css from './style.module.scss';
import anime from 'animejs';
import Links from '@src/components/Links';


function Index() {
  const refNav = useRef<HTMLDivElement>(null);
  const refFirstStick = useRef<HTMLDivElement>(null);
  const refSecondStick = useRef<HTMLDivElement>(null);

  const [asideIsVisible, setAsideVisible] = useState(false);

  function toggleAside () {
    setAsideVisible(!asideIsVisible);

    if (!asideIsVisible) { // open
      anime({ targets: refNav.current, translateY: 560 });
      anime({ targets: refFirstStick.current, translateY: 3.5, rotate: 315 });
      anime({ targets: refSecondStick.current, translateY: -3.5, rotate: 225 });
    } else { // close
      anime({ targets: refNav.current, translateY: 0 });
      anime({ targets: refFirstStick.current, translateY: 0, rotate: 0 });
      anime({ targets: refSecondStick.current, translateY: 0, rotate: 0 });
    }
  }

  return (
    <header>
      <FixedLinksComponent />
      <Container>
        <div className={ css.header }>
          <LogoComponent />

          <button onClick={ toggleAside } className={ css.header__nav_burger }>
            <div ref={ refFirstStick }></div>
            <div ref={ refSecondStick }></div>
          </button>

          <div className={ css.header__nav } ref={ refNav }>
            <NavComponent />
            <LangComponent />
            <Links size={45} className={ css.header__nav__links } />
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Index;