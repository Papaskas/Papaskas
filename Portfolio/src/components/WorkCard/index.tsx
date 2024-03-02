import React from 'react';
import Button from '@src/components/Button';
import css from './style.module.scss';
import InView from '@src/components/Animations/InView';


export type TWorkCard = {
  image: string;
  technologies: string;
  title: string;
  description: string;
  urlToLive?: string;
  urlToGithub?: string;
}
function Index({ image, technologies, title, description, urlToLive, urlToGithub }: Readonly<TWorkCard>) {
  return (
    <InView animateName='animate__bounceInLeft'>
      <div className={ css.work_card }>

        <div className={ css.work_card__image }><img src={ image } alt={ title } /></div>
        <div className={ css.work_card__technologies }>{ technologies }</div>

        <div className={ css.work_card__bottom }>
          <h3 className={ css.work_card__bottom__title }>{ title }</h3>
          <p className={ css.work_card__bottom__description }>{ description }</p>
          <div className={ css.work_card__bottom__buttons }>
            { urlToLive && <Button onClick={ () => window.open(urlToLive) } variant="secondary">Live</Button> }
            { urlToGithub && <Button onClick={ () => window.open(urlToGithub) }>Github</Button> }
          </div>
        </div>

      </div>
    </InView>
  );
}

export default Index;
