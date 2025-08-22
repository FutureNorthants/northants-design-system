import React from 'react';
import QuickExit from '../../components/QuickExit/QuickExit';
import { QuickExitPageExampleProps } from './QuickExitPageExample.types';
import BackToTop from '../../components/BackToTop/BackToTop';
import { Header, MaxWidthContainer } from '../../structure/PageStructures';
import { PageMain } from '../../structure/PageStructures';

const QuickExitPageExample: React.FunctionComponent<QuickExitPageExampleProps> = ({
  label = 'Quick exit',
  url = 'https://www.bbc.co.uk/weather',
  includeBackToTopInExample = false,
  children,
}) => {
  return (
    <>
      <Header
        accessibilityLink="/"
        allServicesLink="/"
        hasDirectoryLink
        hasEventsLink
        hasNewsLink
        hasTranslate
        searchSuggestions={['Apply for a parking permit', 'Bin collections', 'Council tax payments']}
      />
      <MaxWidthContainer>
        <PageMain>
          <QuickExit label={label} url={url} />
          {children}
          <BackToTop isActive={includeBackToTopInExample} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
};

export default QuickExitPageExample;
