import React from 'react';
import css from './style.module.scss';


interface IButton {
  children: React.JSX.Element | React.JSX.Element[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function Index({ children, onClick }: Readonly<IButton>) {
  return (
    <button onClick={ onClick } className={ css.button }>
      { children }
    </button>
  );
}

export default Index;