import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import { MemorialPageProps } from './MemorialPage.types';
import { ThemeProvider } from 'styled-components';
import { GDS_theme, north_theme, west_theme, lb_theme_north, lb_theme_west } from '../../../themes/theme_generator';

// hard-coded in the frontend page layout
const councilServicesLinksArray = [
  {
    title: 'Proceed to council services',
    url: '#all-services',
  },
];

const ExampleMemorialHeroArgs = {
  src: '/hero-image.png',
  placeholder: '/hero-image-small.png',
  alt: 'Image showing ...',
  councilServices: (
    <PageStructures.ServicesLinksList
      oneCol={true}
      hasBackground={true}
      hideHeader={true}
      serviceLinksArray={councilServicesLinksArray}
      serviceId="proceed-to-council-services-link"
    />
  ),
  theme: north_theme,
};

/**
 * An example memorialised home page layout constructed from the structures and components defined
 * in the design system. The actual page layout is defined within the front end app and may be
 * out of step with this example.
 */
export const MemorialPage: React.FunctionComponent<MemorialPageProps> = ({
  numberOfPromos = 4,
  numberOfNewsStories = 3,
  alertBannerTitle,
  alertBannerContent,
  condolenceLinksArray,
  memorialServiceLinksArray,
  servicesArray,
  isBoxed = false,
  promoBannerData,
  promoBannerContent,
  promoBlocksArray,
  newsArticlesArray,
  footerLinksArray,
}) => {
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

      <ThemeProvider theme={lb_theme_west}>
        <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" isHomepage hasTranslate />

        <PageStructures.MemorialHero {...ExampleMemorialHeroArgs}>
          <PageStructures.ServicesLinksList
            hasBackground={true}
            hideHeader={true}
            serviceLinksArray={condolenceLinksArray}
            oneCol={true}
            serviceId="condolence-link"
          />
        </PageStructures.MemorialHero>

        <PageStructures.PageWrapper colour="grey_light">
          <PageStructures.MaxWidthContainer noBackground={true}>
            <PageStructures.ServicesLinksList
              hideHeader={true}
              serviceLinksArray={memorialServiceLinksArray}
              isBoxed={false}
              serviceId="memorial-news"
            />
            <PageStructures.NewsArticleFeaturedBlock
              articles={newsArticlesArray.slice(0, numberOfNewsStories)}
              viewAllLink="/news/"
            />
          </PageStructures.MaxWidthContainer>
        </PageStructures.PageWrapper>

        <PageStructures.MaxWidthContainer overflowVisible>
          <PageStructures.PageMain>
            <PageStructures.ServicesLinksList serviceLinksArray={servicesArray} isBoxed={isBoxed} />

            {numberOfPromos > 0 && (
              <>
                <PageStructures.PromoBanner
                  title={promoBannerData.title}
                  ctaUrl={promoBannerData.ctaUrl}
                  ctaText={promoBannerData.ctaText}
                  image1440x810={promoBannerData.image1440x810}
                  image144x81={promoBannerData.image144x81}
                >
                  {promoBannerContent}
                </PageStructures.PromoBanner>
                <PageStructures.PromoBlock promos={promoBlocksArray.slice(0, numberOfPromos - 1)} />
              </>
            )}
          </PageStructures.PageMain>
        </PageStructures.MaxWidthContainer>

        <PageStructures.Footer footerLinksArray={footerLinksArray} />
      </ThemeProvider>
    </>
  );
};
