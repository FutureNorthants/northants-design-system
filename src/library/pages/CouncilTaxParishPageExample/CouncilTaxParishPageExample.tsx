import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import AlphabeticalDirectory from '../../components/AlphabeticalDirectory/AlphabeticalDirectory';

import CouncilTaxAlphabeticalDirectory from '../../slices/CouncilTaxAlphabeticalDirectory/CouncilTaxAlphabeticalDirectory';
export interface CouncilTaxParishPageExampleProps {
  version: string;
}

export const CouncilTaxParishPageExample: React.FC<CouncilTaxParishPageExampleProps> = ({ version }) => {
  return (
    <>
      <PageStructures.Header />
      <PageStructures.MaxWidthContainer>
        <PageStructures.Breadcrumbs
          breadcrumbsArray={[
            {
              title: 'Home',
              url: '/iframe.html?id=page-examples-council-tax-page-examples--version-b-example&viewMode=story',
            },
            {
              title: 'Council tax',
              url: '#',
            },
            {
              title: 'Payments, changes and your account',
              url: '#',
            },
          ]}
        />
        <PageStructures.PageWithSidebarContainer>
          <PageStructures.PageMain>
            <Heading level={1} text="2020/21 council tax charges by Parish" />

            <CouncilTaxAlphabeticalDirectory />

            <Heading level={2} text="Check a property's band" />

            <p>
              Find out what <a href="https://www.gov.uk/council-tax-bands">council tax band</a> a property is at gov.uk.
            </p>
          </PageStructures.PageMain>
          <PageStructures.PageSidebar>
            <PageStructures.SectionLinksSidebar
              Title="Pages in this section"
              Sections={[
                {
                  SectionTitle: 'Payments, changes and your account',
                  SectionLinks: [
                    {
                      title: 'Check council tax charge of a property',
                      url: '/',
                      isCurrent: true,
                    },
                    {
                      title: 'Pay council tax',
                      url: '/',
                    },
                    {
                      title: 'Council tax account',
                      url: '/',
                    },
                    {
                      title: 'Moving home',
                      url: '/',
                    },
                    {
                      title: 'Request council tax refund',
                      url: '/',
                    },
                    {
                      title: 'What to do in the event of a death',
                      url: '/',
                    },
                  ],
                },
              ]}
            />
          </PageStructures.PageSidebar>
        </PageStructures.PageWithSidebarContainer>
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
};
