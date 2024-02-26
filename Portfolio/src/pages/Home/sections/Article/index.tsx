import React from 'react';
import css from './style.module.scss';


function Index() {
  return (
    <section>
      <div className={ css.background_cube}/>

      <article className={ css.article }>
        <h2 className={ css.article__title }>Let's grab relay and stash it inside our jacket and walk quickly past the guards</h2>
        <p className={ css.article__description }>- Charles Petzold</p>
      </article>
    </section>
  );
}

export default Index;
