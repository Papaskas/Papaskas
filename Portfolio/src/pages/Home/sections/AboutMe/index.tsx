import React from 'react';
import Container from '@src/components/Container';
import css from './style.module.scss';
import SectionHeading from '@src/components/SectionHeading';


function Index() {
  return (
    <section>
      <Container>
        <div>
          <SectionHeading>About-Me</SectionHeading>
        </div>
      </Container>
    </section>
  );
}

export default Index;
