import React from 'react';
import PromoBanner from '../../structure/PromoBanner/PromoBanner';
import PromoBlock from '../../structure/PromoBlock/PromoBlock';
import { PromoBlockProps } from '../../structure/PromoBlock/PromoBlock.types';
import sanitizeHtml from 'sanitize-html';
import * as Styles from '../../structure/PromoBlock/PromoBlock.styles';

/**
 * Combined promotional banner and promotional block for use as a slice on any page
 */
const Promotions: React.FunctionComponent<PromoBlockProps> = ({ promos }) => {
  const numberOfPromos = promos?.length;

  return (
    <>
      {numberOfPromos > 0 && (
        <PromoBanner
          title={promos[0].title}
          ctaUrl={promos[0].callToActionURL}
          ctaText={promos[0].callToActionText}
          image1440x810={promos[0].imageMedium}
          image144x81={promos[0].imageMedium}
        >
          <Styles.PromoContent
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(promos[0].content as String),
            }}
          />
        </PromoBanner>
      )}
      {numberOfPromos > 1 && <PromoBlock promos={promos.slice(1, numberOfPromos)} />}
    </>
  );
};

export default Promotions;
