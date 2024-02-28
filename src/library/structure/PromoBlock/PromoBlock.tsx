import React from 'react';
import { PromoBlockProps } from './PromoBlock.types';
import * as Styles from './PromoBlock.styles';
import sanitizeHtml from 'sanitize-html';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

/**
 * Promotional campaign block, showing a tile for each campaign, similar to news article featured block.
 * Note that the main promotional campaign is to be displayed above these in a PromoBanner.
 */
const PromoBlock: React.FunctionComponent<PromoBlockProps> = ({ promos }) => (
  <>
    {promos && promos.length > 0 && (
      <Styles.PromoTilesContainer data-testid="PromoBlock">
        <Row isList hasWrap={false}>
          {promos.map((promo, index) => (
            <Column isList small="full" medium="one-half" large="auto" key={promo.callToActionURL}>
              <Styles.PromoTile href={promo.callToActionURL}>
                <ResponsiveImage
                  imageSmall={promo.imageSmall}
                  imageLarge={promo.imageMedium}
                  imageAltText={promo.imageAltText ?? ''}
                  smallWidth="400"
                  largeWidth="720"
                  ratio="16by9"
                  objectFit="cover"
                />
                <Styles.PromoText>
                  <Styles.PromoHeadline level={3} text={promo.title} />
                  <Styles.PromoContent
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(promo.content),
                    }}
                  />
                  <Styles.PromoCallToAction>{promo.callToActionText}</Styles.PromoCallToAction>
                </Styles.PromoText>
              </Styles.PromoTile>
            </Column>
          ))}
          {promos.length === 1 && <Column small="full" medium="one-half" large="one-half"></Column>}
        </Row>
      </Styles.PromoTilesContainer>
    )}
  </>
);

export default PromoBlock;
