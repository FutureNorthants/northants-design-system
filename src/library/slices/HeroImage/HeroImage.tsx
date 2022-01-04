import React from "react";
import { HeroImageProps } from "./HeroImage.types";
import * as Styles from "./HeroImage.styles";
import LazyImage from "react-lazy-progressive-image";
import sanitizeHtml from "sanitize-html";
import CallToAction from "../CallToAction/CallToAction";

/**
 * Hero image with optional text and call to action with varying presentation of text area
 */
const HeroImage: React.FunctionComponent<HeroImageProps> = ({
  headline,
  content,
  callToActionText,
  callToActionURL,
  backgroundBox = true,
  imageLarge,
  imageSmall,
  imageAltText,
}) => {
  return (
    <>
      <LazyImage
        src={imageLarge}
        placeholder={imageSmall}
        visibilitySensorProps={{
          partialVisibility: true,
        }}
      >
        {(src, loading) => (
          <Styles.Container
            image={src}
            loading={loading.toString()}
            backgroundBox={backgroundBox}
            data-testid="HeroImage"
          >
            <Styles.Overlay
              backgroundBox={backgroundBox}
              data-testid="HeroImageOverlay"
            >
              {headline && (
                <Styles.Headline
                  level={1}
                  text={headline}
                  backgroundBox={backgroundBox}
                />
              )}
              {content && (
                <Styles.Content
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
                />
              )}
              {callToActionURL && backgroundBox && (
                <CallToAction url={callToActionURL} text={callToActionText} />
              )}
              {!callToActionURL && backgroundBox && (
                <br/>
              )}
              {callToActionURL && !backgroundBox && (
                <Styles.CallToActionLink href={callToActionURL}>
                  {callToActionText ? callToActionText : 'Find out more'}
                </Styles.CallToActionLink>
              )}
            </Styles.Overlay>
          </Styles.Container>
        )}
      </LazyImage>
      {imageAltText && <span role="img" aria-label={imageAltText} />}
    </>
  );
};

export default HeroImage;
