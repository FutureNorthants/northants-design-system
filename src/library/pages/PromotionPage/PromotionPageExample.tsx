import React from 'react';
import { PromotionPageExampleProps } from './PromotionPageExample.types';
import Heading from '../../components/Heading/Heading';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import Cards from '../../slices/Cards/Cards';
import { cardsData, imageCardsData } from './PromotionPageExample.storydata';
import CallToAction from '../../slices/CallToAction/CallToAction';
import ImageAndText from '../../slices/ImageAndText/ImageAndText';
import { ImageAndTextWithHeading } from '../../slices/ImageAndText/ImageAndText.storydata';

export const PromotionPageExample: React.FunctionComponent<PromotionPageExampleProps> = ({
  title,
  heroImage,
  breadcrumbsArray,
  bodyText,
  footerLinksArray,
  topServices,
  summary,
  showSummary = false,
  icon,
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
        breadcrumb={breadcrumbsArray?.[breadcrumbsArray.length - 1]}
      />
    ) : (
      <PageStructures.MaxWidthContainer noPadding>
        <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbsArray} hasMargin />
        {icon ? <HeadingWithIcon icon={icon} level={1} text={title} /> : <Heading text={title} />}
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
      <PageStructures.PageMain fullWidthText={true}>
        {showSummary && summary?.trim() && (
          <PageStructures.Summary>
            <p>{summary}</p>
          </PageStructures.Summary>
        )}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, porta
          urna. Sed porttitor neque vitae elit vehicula eleifend. Vivamus sed purus finibus, tincidunt neque quis,
          mollis urna. Donec dapibus tellus quam, vitae fringilla mi tristique nec. Sed sit amet ligula vel ante congue
          gravida
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula vel ante congue gravida.</li>
          <li>Phasellus vel mi mattis, facilisis est et, porta urna. Sed sit amet ligula vel ante congue gravida</li>
          <li>
            Vivamus sed purus finibus, tincidunt neque quis, mollis urna. Sed sit amet ligula vel ante congue gravida
          </li>
        </ul>
        <Heading level={2} text="Our commitments" />
        <Cards {...cardsData} />
        <Heading level={2} text="Sustainable development goals" />
        <Cards {...imageCardsData} />
        <Heading level={2} text="Ideas bank" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, porta
          urna. Sed porttitor neque vitae elit vehicula eleifend. Vivamus sed purus finibus, tincidunt neque quis,
          mollis urna. Donec dapibus tellus quam, vitae fringilla mi tristique nec. Sed sit amet ligula vel ante congue
          gravida
        </p>
        <ImageAndText {...ImageAndTextWithHeading} />
        <ImageAndText {...ImageAndTextWithHeading} />
        <ImageAndText {...ImageAndTextWithHeading} />
        <Heading level={2} text="Pledge" />
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Phasellus vel mi mattis, facilisis est et, porta urna.</li>
          <li>Vivamus sed purus finibus, tincidunt neque quis, mollis urna.</li>
        </ul>
        <p></p>
        <CallToAction url="/example-link" text="Share your pledge" />
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer footerLinksArray={footerLinksArray} />
  </>
);
