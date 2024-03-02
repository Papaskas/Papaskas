import React from 'react';
import css from './style.module.scss';
import InView from '@src/components/Animations/InView';


type TSkill = {
  title: string;
  children: string;
}
function Index({ title, children }: Readonly<TSkill>) {
  return (
    <InView animateName='animate__bounceInLeft'>
      <div className={ css.skill }>
        <h3 className={ css.skill__title }>{ title }</h3>
        <p className={ css.skill__skills }>{ children }</p>
      </div>
    </InView>
  );
}

export default Index;
