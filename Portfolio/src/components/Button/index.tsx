import React from 'react';
import css from './style.module.scss';


interface IButton {
  children: React.JSX.Element | React.JSX.Element[] | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'default' | 'variant';
}
function Index({ children, onClick, type = 'default' }: Readonly<IButton>) {
  return (
    <button
      onClick={ onClick }
      className={ css.button + ' ' + css[`button_${type}`]}
    >
      { children }
    </button>
  );
}

export default Index;