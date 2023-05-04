import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import DirectoryService from '../../directory/DirectoryService/DirectoryService';
import { ExampleService } from '../../directory/DirectoryService/DirectoryService.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';

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
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbs} hasMargin />
        <DirectoryShortListProvider>
          <DirectoryService {...ExampleService} />
        </DirectoryShortListProvider>
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
