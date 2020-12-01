import React from 'react';
import PageMain from '../../structure/PageMain/PageMain';
import Heading from '../../components/Heading/Heading';

export interface LegacySiteExampleProps {

}

export const LegacySiteExample: React.FC<LegacySiteExampleProps> = ({  }) => (
  <>
    <p>header and breadcrumbs</p>
    <PageMain>
      <Heading level={1} text="Find your bin collection day" />
      <p>Find your bin collection day using your post code and see your waste and recycling calendar on your local council website.</p>
      <p>links to old sites</p>
    </PageMain>
  </>
);
