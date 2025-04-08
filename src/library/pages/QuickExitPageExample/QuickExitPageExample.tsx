import React from 'react';
import QuickExit from '../../components/QuickExit/QuickExit';

import { QuickExitPageExampleProps } from './QuickExitPageExample.types';
import BackToTop from '../../components/BackToTop/BackToTop';

import { MaxWidthContainer } from '../../structure/PageStructures';
import { PageMain } from '../../structure/PageStructures';

const QuickExitPageExample: React.FunctionComponent<QuickExitPageExampleProps> = ({
  quickExitButtonLabel,
  quickExitHyperlink,
  quickExitButtonSolidOrTransparent,
  quickExitButtonIncludeIcon,
  includeBackToTopInExample
}) => {
  return (
    <MaxWidthContainer>
      <PageMain>
        <QuickExit
        quickExitButtonLabel={quickExitButtonLabel}
        quickExitHyperlink={quickExitHyperlink}
        quickExitButtonSolidOrTransparent={quickExitButtonSolidOrTransparent}
        quickExitButtonIncludeIcon={quickExitButtonIncludeIcon}
        />
        <BackToTop isActive={includeBackToTopInExample} />
      </PageMain>
    </MaxWidthContainer>
  );
};

export default QuickExitPageExample;
