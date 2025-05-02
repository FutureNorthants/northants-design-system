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
      <PageStructures.CookieBanner
        title="We use cookies on this site to enhance your user experience"
        paragraph={
          <p>
            By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a>
          </p>
        }
        acceptButtonText="Accept cookies policy"
        rejectButtonText="No, thanks"
        acceptCallback={() => {}}
      />
      <PageStructures.Header />
      <PageStructures.MaxWidthContainer>
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

            <Heading level={2} text="Venue" />
            {event.address && (
              <>
                <Heading level={3} text="Address" />
                <p dangerouslySetInnerHTML={{ __html: event.address.split(',').join('<br />') }} />
              </>
            )}

            <GoogleMap
              link_url="https://www.google.com/maps/place/One+Angel+Square/@52.2354975,-0.8957381,17z/data=!3m1!4b1!4m6!3m5!1s0x48770edc25edd1b9:0x78dc9df52ed14fee!8m2!3d52.2354975!4d-0.8957381!16s%2Fg%2F11dz56s7wz?entry=ttu"
              iframe_html='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4341513867266!2d-0.898313022311356!3d52.23549747198806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770edc25edd1b9%3A0x78dc9df52ed14fee!2sOne%20Angel%20Square!5e0!3m2!1sen!2suk!4v1724139365516!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            />

            <Heading level={3} text="Contact details" />
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
