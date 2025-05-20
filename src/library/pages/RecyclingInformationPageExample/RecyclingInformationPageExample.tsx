import React from 'react';
import RecyclingInformation from '../../slices/RecyclingInformation/RecyclingInformation';

import { RecyclingInformationPageExampleProps } from './RecyclingInformationPageExample.types';
import BackToTop from '../../components/BackToTop/BackToTop';

import { MaxWidthContainer } from '../../structure/PageStructures';
import { PageMain } from '../../structure/PageStructures';

const RecyclingInformationPageExample: React.FunctionComponent<RecyclingInformationPageExampleProps> = ({
  children = null,
}) => {
  return (
    <MaxWidthContainer>
      <PageMain>
        <BackToTop isActive />
        <RecyclingInformation />
        {children}
      </PageMain>
    </MaxWidthContainer>
  );
};

export default RecyclingInformationPageExample;
