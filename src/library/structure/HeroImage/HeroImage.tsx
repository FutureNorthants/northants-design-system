import React from 'react';
import { HeroImageProps } from './HeroImage.types';
import * as Styles from './HeroImage.styles';
import sanitizeHtml from 'sanitize-html';
import CallToAction from '../../slices/CallToAction/CallToAction';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

/**
 * Hero image banner with optional text and call to action with varying presentation of text area.
 * For optional use at the top of a service landing page, if set in the CMS.
 */
const HeroImage: React.FunctionComponent<HeroImageProps> = ({
  headline,
  content,
  callToActionText,
  callToActionURL,
  callToActionIsPrimary = true,
  backgroundBox = true,
  imageLarge,
  imageSmall,
  imageAltText,
  breadcrumb,
  customSearch,
}) => {
  return (
    <Styles.Container data-testid="HeroImage">
      <Styles.ImageContainer $backgroundBox={backgroundBox}>
        <ResponsiveImage
          imageSmall={imageSmall}
          imageLarge={imageLarge}
          imageAltText={imageAltText}
          smallWidth="144"
          largeWidth="1440"
          ratio="auto"
          objectFit="cover"
        />
      </Styles.ImageContainer>
      <Styles.InnerContainer>
        <Styles.Overlay $backgroundBox={backgroundBox} data-testid="HeroImageOverlay">
          {breadcrumb && (
            <Styles.BreadcrumbLink href={breadcrumb.url} $backgroundBox={backgroundBox}>
              {breadcrumb.title}
            </Styles.BreadcrumbLink>
          )}
          {headline && <Styles.Headline level={1} text={headline} $backgroundBox={backgroundBox} />}
          {content && <Styles.Content dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />}
          {customSearch && (
            <Styles.Search>
              <CustomSearch {...customSearch} />
            </Styles.Search>
          )}
          {callToActionURL && backgroundBox && (
            <CallToAction url={callToActionURL} text={callToActionText} primary={callToActionIsPrimary} />
          )}
          {!callToActionURL && backgroundBox && <br />}
          {callToActionURL && !backgroundBox && (
            <Styles.CallToActionLink href={callToActionURL}>
              {callToActionText ? callToActionText : 'Find out more'}
            </Styles.CallToActionLink>
          )}
        </Styles.Overlay>
      </Styles.InnerContainer>
    </Styles.Container>
  );
};

export default HeroImage;
