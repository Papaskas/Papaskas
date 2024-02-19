import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@src/components/Container';
import Button from '@src/components/Button';
import css from './style.module.scss';


function Index() {
  const navigate = useNavigate();

  return (
    <Container>
      <section className={ css.not_found }>
        <div>Page not found</div>
        <h1 className={ css.not_found__heading }>
          Ah, the dreaded 404. Let's get you back on track
        </h1>
        <Button onClick={ () => navigate('/') }>return</Button>
      </section>
    </Container>
  );
}

export default Index;