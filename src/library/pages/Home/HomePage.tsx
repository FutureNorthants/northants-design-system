import React, { useContext } from 'react';
import * as PageStructures from '../../structure/PageStructures';
import { HomePageProps } from './HomePage.types';
import { ThemeContext } from 'styled-components';
import { ExamplePromotedServicesData } from '../../structure/PromotedServicesTabs/PromotedServicesTabs.storydata';
import Heading from '../../components/Heading/Heading';
import BackToTop from '../../components/BackToTop/BackToTop';

/**
 * An example home page layout constructed from the structures and components defined in the
 * design system. The actual page layout is defined within the front end app and may be
 * out of step with this example.
 */
export const HomePage: React.FunctionComponent<HomePageProps> = ({
  numberOfPromos = 4,
  numberOfNewsStories = 3,
  alertBannerTitle,
  alertBannerContent,
  heroArray,
  promotedLinksArray,
  servicesArray,
  isBoxed = false,
  promoBannerData,
  promoBannerContent,
  promoBlocksArray,
  newsArticlesArray,
  footerLinksArray,
  showSearch,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <PageStructures.CookieBanner
        title="We use cookies on this site to enhance your user experience"
        paragraph={
          <p>
            By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a>
          </p>
        }
        acceptButtonText="Accept cookies policy"
        rejectButtonText="No, thanks"
        acceptCallback={() => {}}
      />

      <PageStructures.AlertBanner title={alertBannerTitle} uid="homealert">
        {alertBannerContent}
      </PageStructures.AlertBanner>

      {!showSearch && (
        <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate hasEventsLink />
      )}
      <PageStructures.HomeHero
        promotedLinksArray={promotedLinksArray}
        imagesArray={heroArray}
        showSearch={showSearch}
        promotedServicesTabs={ExamplePromotedServicesData}
      />
      <PageStructures.MaxWidthContainer>
        <PageStructures.PageMain>
          {themeContext.cardinal_name === 'north' && (
            <PageStructures.ServicesLinksList serviceLinksArray={servicesArray} isBoxed={isBoxed} />
          )}

          <Heading text="Featured updates" level={2} />
          {numberOfPromos > 0 && <PageStructures.PromoTabsDisplay promos={promoBlocksArray} />}
          <PageStructures.PromoBlock promos={promoBlocksArray.slice(0, numberOfPromos - 1)} />

          {themeContext.cardinal_name === 'west' && (
            <PageStructures.ServicesLinksList serviceLinksArray={servicesArray} isBoxed={isBoxed} />
          )}

          <PageStructures.NewsArticleFeaturedBlock
            articles={newsArticlesArray.slice(0, numberOfNewsStories)}
            viewAllLink="/news/"
          />
        </PageStructures.PageMain>
      </PageStructures.MaxWidthContainer>

      <PageStructures.Footer footerLinksArray={footerLinksArray} />
      <BackToTop isActive />
    </>
  );
};
