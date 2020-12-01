import React from 'react';
import PageMain from '../../structure/PageMain/PageMain';
import Heading from '../../components/Heading/Heading';

export interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = ({  }) => (
  <PageMain>
    <Heading level={1} text="Home page" />

    <p>This is where the example home page would go - combining components to create an example of a total page together</p>
  </PageMain>
);
