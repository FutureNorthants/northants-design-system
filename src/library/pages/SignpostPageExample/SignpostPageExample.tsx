import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import { hrefTo } from '@storybook/addon-links';
import { SignpostLinkProp } from '../../structure/SignpostLinks/SignpostLinks.types';
import AlertBannerService from '../../structure/AlertBannerService/AlertBannerService';

export interface SignpostPageExampleProps {
  signpostLinksArrayExample: Array<SignpostLinkProp>;
  showServiceAlert: boolean;
}

export const SignpostPageExample: React.FunctionComponent<SignpostPageExampleProps> = ({
  signpostLinksArrayExample,
  showServiceAlert = false,
}) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PhaseBanner />
      <PageStructures.Breadcrumbs
        breadcrumbsArray={[
          {
            title: 'Home',
            url: '/iframe.html?id=page-examples-home-page--example-home&viewMode=story',
          },
          {
            title: 'Bin collection, recycling and waste',
            url: '/?path=/story/page-examples-service-landing-page-examples--bin-collection-example',
          },
        ]}
      />
      <PageStructures.PageWithSidebarContainer>
        <PageStructures.PageMain>
          {showServiceAlert && (
            <AlertBannerService title="Example Service Alert" alertType="alert">
              <p>This is an example alert</p>
            </AlertBannerService>
          )}

          <Heading level={1} text="Find your bin collection day" />
          <p>
            Find your bin collection day using your post code and see your waste and recycling calendar on your local
            council website.
          </p>

          <PageStructures.SignpostLinks signpostLinksArray={signpostLinksArrayExample} />
        </PageStructures.PageMain>
        <PageStructures.PageSidebar>
          <PageStructures.SectionLinksSidebar
            Title="Pages in this section"
            Sections={[
              {
                SectionTitle: 'Your bins and rubbish',
                SectionLinks: [
                  {
                    title: 'Find your bin collection day',
                    url: '/',
                    isCurrent: true,
                  },
                  {
                    title: 'Arrange bulky item collection',
                    url: '/',
                  },
                  {
                    title: 'Report a missed collection',
                    url: '/',
                  },
                  {
                    title: 'Request a new or replacement bin',
                    url: '/',
                  },
                  {
                    title: 'Find a household waste recycling centre',
                    url: '/',
                  },
                  {
                    title: 'What to recycle and where?',
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
