import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import EventDetails from '../../components/EventDetails/EventDetails';
import GoogleMap from '../../slices/GoogleMap/GoogleMap';
import { GoogleMapWithTitleAndDescription } from '../../slices/GoogleMap/GoogleMap.storydata';
import { EventItemProps, EventListProps } from '../../structure/EventList/EventList.types';
import Button from '../../components/Button/Button';
import SummaryList from '../../components/SummaryList/SummaryList';

export interface EventPageExampleProps {
  event: EventItemProps;
}

export const EventPageExample: React.FunctionComponent<EventPageExampleProps> = ({ event }) => {
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
            {
              title: 'Events',
              url: '/events',
            },
          ]}
        />
        <PageStructures.PageWithSidebarContainer>
          <PageStructures.PageMain>
            <Heading level={1} text={event.title} />

            {event.imageLarge && (
              <ResponsiveImage
                imageAltText={event.imageAltText}
                imageLarge={event.imageLarge}
                imageSmall={event.imageSmall}
                smallWidth="400"
                largeWidth="720"
                ratio="16by9"
              />
            )}

            {event.summary && <PageStructures.Summary>{event.summary}</PageStructures.Summary>}

            <EventDetails startTime={event.startTime} location={event.location} />

            <div dangerouslySetInnerHTML={{ __html: event.description }} />

            <Heading level={2} text="Contact details" />
            <SummaryList
              terms={[
                { term: 'Email', detail: event.email ? `<a href="mailto:${event.email}">${event.email}</a>` : '' },
                { term: 'Website', detail: event.website ? `<a href="${event.website}">${event.website}</a>` : '' },
                {
                  term: 'Telephone',
                  detail: event.telephone ? `<a href="tel:${event.telephone}">${event.telephone}</a>` : '',
                },
              ]}
            />

            <Heading level={2} text="Venue" />
            {event.address && (
              <>
                <Heading level={3} text="Address" />
                <p dangerouslySetInnerHTML={{ __html: event.address.split(',').join('<br />') }} />
              </>
            )}

            <GoogleMap {...GoogleMapWithTitleAndDescription} />
          </PageStructures.PageMain>
          <PageStructures.PageSidebar>
            <PageStructures.SectionLinksSidebar
              Title="Related events"
              Sections={[
                {
                  SectionLinks: [
                    {
                      title: 'Another event',
                      url: '/events/2',
                    },
                    {
                      title: 'Another related event',
                      url: '/events/3',
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
