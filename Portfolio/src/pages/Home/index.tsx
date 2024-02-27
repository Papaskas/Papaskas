import React from 'react';
import AboutMe from '@src/pages/Home/sections/AboutMe';
import Preview from '@src/pages/Home/sections/Preview';
import Article from '@src/pages/Home/sections/Article';
import Skills from '@src/pages/Home/sections/Skills';
import css from './style.module.scss';


function Index() {
  return (
    <div className={ css.home_page }>
      <Preview />
      <Article />
      <Skills />
      {/*<AboutMe />*/}
    </div>
  );
}

export default Index;
