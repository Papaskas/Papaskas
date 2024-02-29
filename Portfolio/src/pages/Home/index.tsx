import React from 'react';
import AboutMe from '@src/pages/Home/sections/AboutMe';
import Preview from '@src/pages/Home/sections/Preview';
import Article from '@src/pages/Home/sections/Article';
import Skills from '@src/pages/Home/sections/Skills';
import css from './style.module.scss';
import Works from '@src/pages/Home/sections/Works';


function Index() {
  return (
    <main className={ css.home_page }>
      <Preview />
      <Article />
      <Skills />
      <Works />
      {/*<AboutMe />*/}
    </main>
  );
}

export default Index;
