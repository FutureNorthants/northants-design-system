import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import ConsultationList from '../../structure/ConsultationList/ConsultationList';
import { ExampleConsultationListData } from '../../structure/ConsultationList/ConsultationList.storydata';

export interface ConsultationLandingPageExampleProps {}

export const ConsultationLandingPageExample: React.FunctionComponent<ConsultationLandingPageExampleProps> = ({}) => (
  <>
    <PageStructures.Header hasEventsLink hasNewsLink hasTranslate accessibilityLink="/accessibility" hasDirectoryLink />
    <PageStructures.MaxWidthContainer noPadding>
      <PageStructures.Breadcrumbs breadcrumbsArray={[{ title: 'Home', url: '/' }]} />

      <PageStructures.PageMain>
        <Heading level={1} text="Consultations in West Northamptonshire" />

        <ConsultationList {...ExampleConsultationListData} />
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
