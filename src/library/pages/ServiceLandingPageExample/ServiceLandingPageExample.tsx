import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import Heading from '../../components/Heading/Heading';
import SectionLinksMobileContents from '../../structure/SectionLinksMobileContents/SectionLinksMobileContents';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';
import Summary from '../../structure/Summary/Summary';

export const ServiceLandingPageExample: React.FunctionComponent<ServiceLandingPageExampleProps> = ({
  title,
  heroImage,
  breadcrumbsArray,
  sections,
  bodyText,
  footerLinksArray,
  topServices,
  summary,
  showSummary = false,
  serviceAlert,
  icon,
}) => (
  <>
    <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />
    {heroImage ? (
      <>
        <PageStructures.HeroImage
          headline={heroImage.headline ? heroImage.headline : title}
          content={heroImage.content}
          callToActionText={heroImage.callToActionText}
          callToActionURL={heroImage.callToActionURL}
          imageLarge={heroImage.imageLarge}
          imageSmall={heroImage.imageSmall}
          imageAltText={heroImage.imageAltText}
          backgroundBox={heroImage.backgroundBox}
          breadcrumb={breadcrumbsArray?.[breadcrumbsArray.length - 1]}
        />

        {serviceAlert?.alertType && (
          <PageStructures.MaxWidthContainer noPadding>
            <PageStructures.AlertBannerService {...serviceAlert} hasTopSpacing>
              {serviceAlert.children}
            </PageStructures.AlertBannerService>
          </PageStructures.MaxWidthContainer>
        )}
      </>
    ) : (
      <PageStructures.MaxWidthContainer noPadding>
        <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbsArray} hasMargin />

        <Heading text={title} level={1} />

        {serviceAlert?.alertType && (
          <PageStructures.AlertBannerService {...serviceAlert}>
            {serviceAlert.children}
          </PageStructures.AlertBannerService>
        )}
      </PageStructures.MaxWidthContainer>
    )}

    {topServices && (
      <PageStructures.FullWidthContainer hasBackground={true} hasPadding={true}>
        <PageStructures.MaxWidthContainer noBackground={true} noPadding={true}>
          <PageStructures.ServicesLinksList {...topServices} />
        </PageStructures.MaxWidthContainer>
      </PageStructures.FullWidthContainer>
    )}

    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain fullWidthText>
        {showSummary && summary?.trim() && (
          <Summary>
            <p>{summary}</p>
          </Summary>
        )}

        <>{bodyText ? bodyText : 'Any introductory text and slices for the landing page goes here.'}</>

        {sections.length > 1 ? (
          <SectionLinksMobileContents
            sectionLinksArray={sections.map((section) => ({ id: section.sectionSlug, title: section.sectionTitle }))}
          />
        ) : (
          ''
        )}
        {sections.map((section) => (
          <PageStructures.SectionLinks displayTitle={sections.length > 1} {...section} key={section.sectionSlug} />
        ))}
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer footerLinksArray={footerLinksArray} />
  </>
);
