import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import EventDetails from '../../components/EventDetails/EventDetails';
import GoogleMap from '../../slices/GoogleMap/GoogleMap';
import { GoogleMapWithTitleAndDescription } from '../../slices/GoogleMap/GoogleMap.storydata';
import EventList from '../../structure/EventList/EventList';
import { ExampleEventListResults } from '../../structure/EventList/EventList.storydata';

export interface EventLandingPageExampleProps {}

export const EventLandingPageExample: React.FunctionComponent<EventLandingPageExampleProps> = ({}) => {
  return (
    <>
      <PageStructures.Header />
      <PageStructures.MaxWidthContainer noPadding>
        <PageStructures.Breadcrumbs
          breadcrumbsArray={[
            {
              title: 'Home',
              url: '/',
            },
          ]}
        />

        <PageStructures.PageMain>
          <Heading level={1} text="Events in West Northamptonshire" />

          <EventList {...ExampleEventListResults} />
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
};
