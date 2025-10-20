import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import sanitizeHtml from 'sanitize-html';
import SummaryList from '../../components/SummaryList/SummaryList';
import { ConsultationItemProps } from '../../structure/ConsultationList/ConsultationList.types';
import Button from '../../components/Button/Button';
import DownloadableFiles from '../../slices/DownloadableFiles/DownloadableFiles';
import ConsultationStatus from '../../components/ConsultationStatus/ConsultationStatus';

export interface ConsultationPageExampleProps {
  consultation: ConsultationItemProps;
}

export const ConsultationPageExample: React.FunctionComponent<ConsultationPageExampleProps> = ({ consultation }) => (
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
            title: 'Consultations',
            url: '/consultations',
          },
        ]}
      />
      <PageStructures.PageWithSidebarContainer>
        <PageStructures.PageMain>
          <Heading level={1} text={consultation.title} />

          {consultation.imageLarge && (
            <ResponsiveImage
              imageAltText={consultation.imageAltText}
              imageLarge={consultation.imageLarge}
              imageSmall={consultation.imageSmall}
              smallWidth="400"
              largeWidth="720"
              ratio="16by9"
            />
          )}

          {consultation.summary && <PageStructures.Summary>{consultation.summary}</PageStructures.Summary>}

          <Heading level={2} text="Overview" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat dolor quis rutrum mattis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur placerat magna in condimentum
            consectetur. Morbi facilisis ligula tellus, non euismod erat accumsan nec. Mauris posuere elit sit amet
            felis malesuada convallis.
          </p>
          <Heading level={2} text="Background" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat dolor quis rutrum mattis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur placerat magna in condimentum
            consectetur. Morbi facilisis ligula tellus, non euismod erat accumsan nec. Mauris posuere elit sit amet
            felis malesuada convallis.
          </p>

          <Heading level={2} text="Related documentation" />

          <DownloadableFiles
            files={[
              {
                title:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
                type: 'PDF',
                url: 'https://www.google.com/test4.pdf',
                size: '1.2 MB',
                archived: false,
              },
              {
                title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
                type: 'PDF',
                url: 'https://www.google.com/test5.pdf',
                size: '279.06 KB',
                archived: false,
              },
            ]}
          />
          <Heading level={2} text="How to provide your views" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat dolor quis rutrum mattis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <p>
            <strong>This consultation ends at 01/01/2026.</strong>
          </p>
        </PageStructures.PageMain>
        <PageStructures.PageSidebar>
          <Heading level={3} text="Key information" />

          {consultation.surveyLink && <Button url={consultation.surveyLink} text="Complete the survey" size="large" />}
          <SummaryList
            terms={[
              {
                term: 'Contact',
                detail: consultation.contact ? `${consultation.contact}` : '',
              },
              {
                term: 'Role',
                detail: consultation.role ? `${consultation.role}` : '',
              },
              {
                term: 'Email',
                detail: consultation.email ? `<a href="tel:${consultation.email}">${consultation.email}</a>` : '',
              },
            ]}
          />
          <ConsultationStatus openDate={consultation.openDate} closeDate={consultation.closeDate} />
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
