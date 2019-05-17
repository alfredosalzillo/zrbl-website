import React from 'react';
import Header from '../../Page/Header/Header';
import Page from '../../Page/Page';
import Article from '../../Article/Article';
import Card from '../../Card/Card';
import Container from '../../Page/Container/Container';
import Content from '../../Page/Container/Content/Content';
import SideContent from '../../Page/Container/SideContent/SideContent';
import {
  article, card1, card2, card3,
} from '../../../../mocks/exampleDataHome';

const Home = () => (
  <Page>
    <Header title="Asdrubale" />
    <Container>
      <Content>
        <Article
          {...article}
        />
      </Content>
      <SideContent>
        <Card
          backgroundText="01"
          icon={card1.icon}
          subHeading={card1.subHeading}
          heading={card1.heading}
          pictures={card1.pictures}
          expandButtonText="Clicca Qui"
          enableExpand
        />
        <div style={{ marginTop: '30px' }}>
          <Card
            backgroundText="02"
            {...card2}
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Card
            backgroundText="03"
            {...card3}
          />
        </div>
      </SideContent>
    </Container>
  </Page>
);

export default Home;
