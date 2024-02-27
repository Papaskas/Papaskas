import React from 'react';
import css from './style.module.scss';


type TSectionTitle = {
  children: string;
}
function Index({ children }: Readonly<TSectionTitle>) {

  return (
    <div className={ css.section_heading }>
      <h2 className={ css.section_heading__title }>{ children }</h2>
      <div className={ css.section_heading__line } />
    </div>
  );
}

export default Index;
