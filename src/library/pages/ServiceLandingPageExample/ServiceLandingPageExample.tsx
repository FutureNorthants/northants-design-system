import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import SectionLinksMobileContents from '../../structure/SectionLinksMobileContents/SectionLinksMobileContents';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';
import ServicesLinksList from '../../structure/ServicesLinksList/ServicesLinksList';
import FullWidthContainer from '../../structure/FullWidthContainer/FullWidthContainer';

export const ServiceLandingPageExample: React.FC<ServiceLandingPageExampleProps> = ({
  title,
  breadcrumbsArray,
  sections,
  footerLinksArray,
  topServices,
}) => (
  <>
    <PageStructures.Header />
    {topServices && (
      <FullWidthContainer noBackground={false} noPadding={false}>
        <PageStructures.MaxWidthContainer noBackground={true} noPadding={true}>
          <ServicesLinksList {...topServices} />
        </PageStructures.MaxWidthContainer>
      </FullWidthContainer>
    )}
    <PageStructures.MaxWidthContainer>
      <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbsArray} />
      <PageStructures.PageMain>
        <HeadingWithIcon level={1} text={title} icon="bins" />

        {sections.length > 1 ? (
          <SectionLinksMobileContents
            sectionLinksArray={sections.map((section) => ({ id: section.sectionSlug, title: section.sectionTitle }))}
          />
        ) : (
          ''
        )}
        {sections.map((section) => (
          <PageStructures.SectionLinks {...section} key={section.sectionSlug} />
        ))}
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer footerLinksArray={footerLinksArray} />
  </>
);
