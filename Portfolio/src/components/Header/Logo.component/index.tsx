import React from 'react';
import css from './style.module.scss';
import { Link } from 'react-router-dom';


function Index() {
  return (
    <Link to="/" className={ css.logo }>
      <img alt="papaska logo" className={ css.logo__icon }  />
      <p className={ css.logo__title }>Papaska</p>
    </Link>
  );
}

export default Index;