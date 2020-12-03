import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

export interface LegacySiteExampleProps {

}

export const LegacySiteExample: React.FC<LegacySiteExampleProps> = ({  }) => (
  <>
    <PageStructures.Header />
    <PageStructures.Breadcrumbs 
      breadcrumbsArray={[
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Bin collection, recycling and waste",
            url: "/"
        }
      ]}
    />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Find your bin collection day" />
        <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
        <p>links to old sites</p>
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
  </>
);
