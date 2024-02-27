import React from 'react';
import css from './style.module.scss';
import Container from '@src/components/Container';


type TPageHeading = {
  children: string;
  description: string;
}
function Index({ children, description }: Readonly<TPageHeading>) {
  return (
    <Container className={ css.page_heading }>
      <h1 className={ css.page_heading__title }>{ children }</h1>
      <p className={ css.page_heading__description }>{ description }</p>
    </Container>
  );
}

export default Index;
