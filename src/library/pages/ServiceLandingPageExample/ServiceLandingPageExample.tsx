import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import SectionLinksMobileContents from '../../structure/SectionLinksMobileContents/SectionLinksMobileContents';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';

export const ServiceLandingPageExample: React.FunctionComponent<ServiceLandingPageExampleProps> = ({
  title,
  heroImage,
  breadcrumbsArray,
  sections,
  bodyText,
  footerLinksArray,
}) => (
  <>
    <PageStructures.Header />
    {heroImage ? (
      <PageStructures.HeroImage
        headline={heroImage.headline ? heroImage.headline : title}
        content={heroImage.content}
        callToActionText={heroImage.callToActionText}
        callToActionURL={heroImage.callToActionURL}
        imageLarge={heroImage.imageLarge}
        imageSmall={heroImage.imageSmall}
        imageAltText={heroImage.imageAltText}
        backgroundBox={heroImage.backgroundBox}
      />
    ) : (
      ''
    )}
    <PageStructures.MaxWidthContainer>
      {heroImage ? (
        ''
      ) : (
        <>
          <PageStructures.PhaseBanner />
          <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbsArray} />
        </>
      )}
      <PageStructures.PageMain>
        {heroImage ? '' : <HeadingWithIcon level={1} text={title} icon="bins" />}

        <p>{bodyText ? bodyText : 'Any introductory text and slices for the landing page goes here.'}</p>

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
