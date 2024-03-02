import React from 'react';
import Container from '@src/components/Container';
import SectionHeading from '@src/components/SectionHeading';
import SkillComponent from '@src/pages/Home/sections/Skills/Skill.component';
import logoOutline from '@src/assets/icons/logo/logo_outline.svg';
import cubeDots from '@src/assets/icons/gray/CubeDots.svg';
import css from './style.module.scss';


function Index() {
  return (
    <section>
      <Container>
        <SectionHeading>Skills</SectionHeading>

        <div className={ css.skills }>

          <div className={ css.skills__background }>
            <div className={ css.skills__background__box }>
              <img src={ cubeDots.toString() } alt="cube dots" />
            </div>
            <div className={ css.skills__background__box }>
              <div className={ css.skills__background__cube_big } />
            </div>
            <div className={ css.skills__background__box }>
              <img className={ css.skills__background__logo } src={ logoOutline.toString() } alt="logo outline" />
            </div>
            <div className={ css.skills__background__box }>
              <img src={ cubeDots.toString() } alt="cube dots" />
            </div>
            <div className={ css.skills__background__box }>
              <div className={ css.skills__background__cube_small } />
            </div>
          </div>

          <div className={ css.skills__items }>
            <SkillComponent title="language">JavaScript Java PHP TypeScript Python</SkillComponent>
            <SkillComponent title="database">MySQL PostgreSQL MongoDB Redis SQLite</SkillComponent>
            <SkillComponent title="frontend">Sass PixelPerfect Bootstrap Photoshop BEM Illustrator Figma MobileFirst</SkillComponent>
            <SkillComponent title="stack">React TypeScript Express MongoDB</SkillComponent>
            <SkillComponent title="frameworks">React Angular Next Laravel Django</SkillComponent>
            <SkillComponent title="tools">Git Ubuntu Bash Yarn SSH Docker Apache Nginx</SkillComponent>
          </div>

        </div>

      </Container>
    </section>
  );
}

export default Index;
