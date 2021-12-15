import React from "react";
import LazyImage from "react-lazy-progressive-image";
import { PromoBlockProps } from "./PromoBlock.types";
import * as Styles from "./PromoBlock.styles";
import sanitizeHtml from "sanitize-html";

/**
 * Promotional campaign block, showing a tile for each campaign, similar to news article featured block.
 * Note that the main promotional campaign is to be displayed above these in a PromoBanner.
 */
const PromoBlock: React.FunctionComponent<PromoBlockProps> = ({ promos }) => {
  if (promos && promos.length > 0) {
    return (
      <>
        <Styles.PromoTilesContainer>
          {promos.map((promo, index) => (
            <Styles.PromoTile
              key={promo.callToActionURL}
              href={promo.callToActionURL}
            >
              <LazyImage
                src={promo.imageMedium}
                placeholder={promo.imageSmall}
                visibilitySensorProps={{
                  partialVisibility: true,
                }}
              >
                {(src) => (
                  <Styles.PromoImage
                    background={src}
                    role="img"
                    aria-label={promo.imageAltText ? promo.imageAltText : ""}
                  />
                )}
              </LazyImage>
              <Styles.PromoText>
                <Styles.PromoHeadline level={3} text={promo.title} />
                <Styles.PromoContent
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(promo.content),
                  }}
                />
                <Styles.PromoCallToAction>
                  {promo.callToActionText}
                </Styles.PromoCallToAction>
              </Styles.PromoText>
            </Styles.PromoTile>
          ))}
        </Styles.PromoTilesContainer>
      </>
    );
  } else {
    return <></>;
  }
};

export default PromoBlock;
