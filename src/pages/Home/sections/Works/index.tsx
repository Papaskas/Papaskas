import React from 'react'
import Container from '@src/components/Container'
import SectionHeading from '@src/components/SectionHeading'
import WorkCard, { TWorkCard } from '@src/components/WorkCard'
import Secretum from '@src/assets/works/secretum.jpg'
import Forbus from '@src/assets/works/forbus.svg'
import WireGuard from '@src/assets/works/wireGuard.png'
import Papaska from '@src/assets/works/papaska.svg'
import css from './style.module.scss'
import { useTranslation } from 'react-i18next'

const cards: TWorkCard[] = [
  {
    image: Papaska,
    technologies: 'React TypeScript Sass Yarn Docker',
    title: 'Me portfolio',
    description: 'Papaska',
    urlToGithub: 'https://github.com/Papaskas/Papaskas/tree/main/Portfolio',
  },
  {
    image: Forbus,
    technologies: 'PHP Laravel Apache Blade MySQL',
    title: 'Forbus',
    description: 'Forbus',
    urlToGithub: 'https://github.com/Papaskas/forbus',
  },
  {
    image: WireGuard,
    technologies: 'JavaScript HTML CSS',
    title: 'Frontend WireGuard',
    description: 'WireGuard',
    urlToGithub: 'https://github.com/Papaskas/WireGuard',
  },
  {
    image: Secretum,
    technologies: 'React TypeScript Sass PHP Laravel MySQL Email',
    title: 'Secretum',
    description: 'Secretum',
    urlToGithub: 'https://github.com/Papaskas/Secretum',
  },
]
function Index() {
  const { t } = useTranslation()

  return (
    <section>
      <div className={css.works__background_cube} />

      <Container>
        <SectionHeading>{t('sectionTitle.works')}</SectionHeading>

        <div className={css.works}>
          {cards.map((el) => (
            <WorkCard
              key={el.title}
              image={el.image}
              technologies={el.technologies}
              title={el.title}
              description={t(`worksCards.${el.description}.description`)}
              urlToLive={el.urlToLive}
              urlToGithub={el.urlToGithub}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Index
