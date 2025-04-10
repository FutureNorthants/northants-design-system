import React from 'react';
import QuickExit from '../../components/QuickExit/QuickExit';

import { QuickExitPageExampleProps } from './QuickExitPageExample.types';
import BackToTop from '../../components/BackToTop/BackToTop';

import { MaxWidthContainer } from '../../structure/PageStructures';
import { PageMain } from '../../structure/PageStructures';

const QuickExitPageExample: React.FunctionComponent<QuickExitPageExampleProps> = ({
  label = "Quick exit",
  url = "https://www.bbc.co.uk/weather",
  isTransparent = false,
  hasIcon = false,
  includeBackToTopInExample = false,
  children
}) => {
  return (
    <MaxWidthContainer>
      <PageMain>
        <QuickExit
        label={label}
        url={url}
        isTransparent={isTransparent}
        hasIcon={hasIcon}
        />
        {children}
        <BackToTop isActive={includeBackToTopInExample} />
      </PageMain>
    </MaxWidthContainer>
  );
};

export default QuickExitPageExample;