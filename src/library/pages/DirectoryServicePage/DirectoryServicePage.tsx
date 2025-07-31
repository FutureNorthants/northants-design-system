import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import DirectoryService from '../../directory/DirectoryService/DirectoryService';
import { ExampleService } from '../../directory/DirectoryService/DirectoryService.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import WarningText from '../../slices/WarningText/WarningText';

const breadcrumbs: BreadcrumbProp[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Directory',
    url: '/',
  },
  {
    title: 'Local Offer',
    url: '/',
  },
];

export const DirectoryServicePage: React.FunctionComponent = () => (
  <>
    <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbs} hasMargin />
        <DirectoryShortListProvider>
          <DirectoryService {...ExampleService} />
        </DirectoryShortListProvider>
        <WarningText title="Disclaimer">
          <p>
            Publication on the Local Offer does not endorse a provider, so please take reasonable steps to ensure that
            any service found on the Local Offer is suitable for your family member. For more information please read
            our <a href={process?.env?.LOCAL_OFFER_DISCLAIMER_URL}>disclaimer</a>.
          </p>
        </WarningText>
        <p>
          <PageStructures.DisplayDate preText="Last updated " text={ExampleService.updated_at} format="YYYY-MM-DD" />
        </p>
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer
      footerLinksArray={[
        {
          title: 'About',
          url: '/',
        },
        {
          title: 'Accessibility',
          url: '/',
        },
        {
          title: 'Cookies',
          url: '/',
        },
        {
          title: 'Contact us',
          url: '/',
        },
        {
          title: 'Jobs',
          url: '/',
        },
        {
          title: 'Newsletter',
          url: '/',
        },
      ]}
    />
  </>
);
