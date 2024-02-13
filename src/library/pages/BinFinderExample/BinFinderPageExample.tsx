import React from 'react';
import * as PageStructures from './../../structure/PageStructures';
import Heading from './../../components/Heading/Heading';
import BinFinder from '../../slices/BinFinder/BinFinder';

export interface BinFinderPageExampleProps {
  title: string;
}

export const BinFinderPageExample: React.FunctionComponent<BinFinderPageExampleProps> = ({ title }) => {
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
              title: 'Bins, recycling and waste',
              url: '#',
            },
            {
              title: 'Bin collection services',
              url: '#',
            },
          ]}
        />
        <PageStructures.PageWithSidebarContainer>
          <PageStructures.PageMain>
            <Heading level={1} text="Bin collection day" />
            <p>
              It is important that you know the day that your rubbish is collected. Leaving your rubbish on the street
              on any other day is not acceptable and can be classed as fly tipping.
            </p>

            <p>
              Find your next bin collection dates by entering your property details below. After entering your postcode,
              you will be able to download your calendar.
            </p>

            <p>
              If you live in a flat in the former South Northants area please call 0300 126 7000 or email
              customerservice.snc@westnorthants.gov.uk to confirm the collection day.
            </p>

            <p>
              You can also keep on top of bin collections throughout the year by downloading the West Northamptonshire
              Council app from Google Play or the Apple App Store.
            </p>

            <BinFinder title={title} />
          </PageStructures.PageMain>
          <PageStructures.PageSidebar>
            <PageStructures.SectionLinksSidebar
              Title="Pages in this section"
              Sections={[
                {
                  SectionTitle: 'Bin collections',
                  SectionLinks: [
                    {
                      title: 'Bin collection day',
                      url: '/',
                      isCurrent: true,
                    },
                    {
                      title: 'What goes in each bin',
                      url: '/',
                    },
                    {
                      title: 'New, replacement or additional bins',
                      url: '/',
                    },
                    {
                      title: 'Getting help putting your bins out',
                      url: '/',
                    },
                    {
                      title: 'Missed bin collections',
                      url: '/',
                    },
                    {
                      title: 'Bulky waste collections',
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
            title: 'Accessibility',
            url: '/',
          },
          {
            title: 'Contact us',
            url: '/',
          },
          {
            title: 'Copyright',
            url: '/',
          },

          {
            title: 'Payments',
            url: '/',
          },
          {
            title: 'Privacy',
            url: '/',
          },
          {
            title: 'Website feedback',
            url: '/',
          },
        ]}
      />
    </>
  );
};
