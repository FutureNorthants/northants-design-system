import React, { useState } from 'react';
import { PromoTabsProps } from './PromoTabs.types';
import * as Styles from './PromoTabs.styles';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import sanitizeHtml from 'sanitize-html';

const PromoTabs: React.FunctionComponent<PromoTabsProps> = ({ promos }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <Styles.Container data-testid="PromoTabs">
      <Row>
        <Column small="full" medium="one-third" large="one-quarter" classes="promo-tab-column">
          <div role="tablist">
            {promos.map((promo, index) => (
              <Styles.TitleButton
                onClick={() => toggleTab(index)}
                key={index}
                $isActive={index === activeTab}
                role="tab"
                id={`promo-tab-${index}`}
                aria-controls={`promo-tabpanel-${index}`}
                aria-selected={index === activeTab ? 'true' : 'false'}
              >
                {promo.title}
              </Styles.TitleButton>
            ))}
          </div>
        </Column>

        {promos.map((promo, index) => {
          const hiddenClass = index !== activeTab ? 'hideColumn' : '';
          return (
            <Column
              small="full"
              medium="two-thirds"
              large="three-quarters"
              key={index}
              classes={`promo-tab-column ${hiddenClass}`}
              role="tabpanel"
              aria-labelledby={`promo-tab-${index}`}
              id={`promo-tabpanel-${index}`}
            >
              <Row classes="promo-tab-row">
                <Column small="full" medium="full" large="one-third" classes="promo-tab-column">
                  <Styles.ContentContainer>
                    <Heading level={3} text={promo.title} />
                    <Styles.PromoText
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(promo.content),
                      }}
                    />
                    <Styles.PromoLink href={promo.callToActionURL}>{promo.callToActionText}</Styles.PromoLink>
                  </Styles.ContentContainer>
                </Column>
                <Column small="full" medium="full" large="two-thirds" classes="promo-tab-column">
                  <Styles.ImageContainer>
                    <ResponsiveImage
                      imageSmall={promo.imageSmall}
                      imageLarge={promo.imageMedium}
                      imageAltText={promo.imageAltText ?? promo.title}
                      smallWidth="400"
                      largeWidth="720"
                      ratio="auto"
                      objectFit="cover"
                    />
                  </Styles.ImageContainer>
                </Column>
              </Row>
            </Column>
          );
        })}
      </Row>
    </Styles.Container>
  );
};

export default PromoTabs;
