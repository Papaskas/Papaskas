import React from 'react';
import Container from '@src/components/Container';
import NavComponent from '@src/components/Header/Nav.component';
import LogoComponent from './Logo.component'
import css from './style.module.scss';


function Index() {
  return (
    <header>
      <Container>
        <div className={ css.header }>
          <LogoComponent />
          <NavComponent />
        </div>
      </Container>
    </header>
  );
}

export default Index;