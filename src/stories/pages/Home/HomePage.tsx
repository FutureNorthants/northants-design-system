import React from 'react';

import { PageMain } from '../../components/PageMain/PageMain';
import './styles.css';

export interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = ({  }) => (
  <PageMain>
    <h1>Home page</h1>
    <p>This is where the example home page would go - combining components to create an example of a total page together</p>
  </PageMain>
);
