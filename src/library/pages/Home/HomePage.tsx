import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

export interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = ({  }) => (
  <>
  <PageStructures.Header isHomepage />
  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Home page" />

        <p>This is where the example home page would go - combining components to create an example of a total page together</p>
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer 
      footerLinksArray={[
        {
          title: "About",
          url: "/"
        },
        {
          title: "Accessibility",
          url: "/"
        },
        {
          title: "Cookies",
          url: "/"
        },
        {
          title: "Contact us",
          url: "/"
        },
        {
          title: "Jobs",
          url: "/"
        },
        {
          title: "Newsletter",
          url: "/"
        }
      ]}
    />
  </>
);
