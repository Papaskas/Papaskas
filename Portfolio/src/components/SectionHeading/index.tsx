import React from 'react';
import css from './style.module.scss';
import { Link } from 'react-router-dom';


type TSectionTitle = {
  children: string;
  to?: string;
}
function Index({ children, to }: Readonly<TSectionTitle>) {

  return (
    <div className={ css.section_heading }>
      <div className={ css.section_heading__title }>
        <h2 className={ css.section_heading__title__title }>{ children }</h2>
        <div className={ css.section_heading__title__line } />
      </div>

      { to ?
        <Link to={ to } className={ css.section_heading__link }>
          <div>/View all</div>
        </Link> : null
      }
    </div>
  );
}

export default Index;
