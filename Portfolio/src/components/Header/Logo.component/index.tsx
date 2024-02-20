import React from 'react';
import css from './style.module.scss';


function Index() {
  return (
    <div className={ css.logo }>
      <img src="" alt="" className={ css.logo__icon }  />
      <p className={ css.logo__title }></p>
    </div>
  );
}

export default Index;