import React from 'react';
import Container from '@src/components/Container';
import Button from '@src/components/Button';
import { useNavigate } from 'react-router-dom';
import BinAnimation from '@src/components/Animations/Bin.animation';
import big_logo from '@src/assets/icons/logo/big_logo_2.svg';
import css from './style.module.scss';


function Index() {
  const navigate = useNavigate();

  return (
    <section>
      <Container className={ css.preview }>

        {/*<h1><BinAnimation>Павел</BinAnimation></h1>*/}

          <div className={ css.preview__heading }>
            <h1 className={ css.preview__heading_title }>Hello! My name is <span>Pavel</span> and i'm a <span>web developer</span></h1>
            <p className={ css.preview__heading_description }>I'm crafts responsive websites where technologies meet creativity</p>
            <Button onClick={ () => navigate('/contacts') }>Contact me !!</Button>
          </div>
          <div className={ css.preview__img }>
            <img src={ big_logo.toString() } alt="big logo" />
          </div>

      </Container>
    </section>
  );
}

export default Index;
