import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import AlertBanner from '../../structure/AlertBanner/AlertBanner';
import HomeUnitarySection from '../../structure/HomeUnitarySection/HomeUnitarySection';
import { newsArticleData } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlockData';
import { promoData } from '../../structure/PromoBlock/PromoBlock.storydata';
import { HeroImageProp } from '../../structure/HomeHero/HomeHero.types';
import { PageLinkProp } from '../../structure/ServicesLinksList/ServicesLinksList.types';

export interface HomePageProps {
  /**
   * The number of promotional tiles (0 to 4 supported)
   */
  numberOfPromos: number;
  
  /**
   * The number of news stories (0 to 9 supported)
   */
  numberOfNewsStories: number;

  /**
   * Hero images
   */
  heroArray: Array<HeroImageProp>;

  /**
   * Service links
   */
  servicesArray: Array<PageLinkProp>;
}

const submitInfo = [{
  postTo: "/search",
  params: {
      type: "search"
  }
}]
const AlertMessage = <p>Coronavirus | National lockdown: stay at home. <a href="/">Learn what this means for residents and workers here</a></p>

/**
 * An example home page layout constructed from the structures and components defined in the
 * design system. The actual page layout is defined within the front end app and may be
 * out of step with this example.
 */
export const HomePage: React.FunctionComponent<HomePageProps> = ({ numberOfPromos = 4, numberOfNewsStories = 3, heroArray, servicesArray }) => (
  <>
    <PageStructures.CookieBanner 
      title="We use cookies on this site to enhance your user experience"
      paragraph={<p>By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a></p>}
      acceptButtonText="Accept cookies policy"
      rejectButtonText= "No, thanks"
      acceptCallback={() => {
        console.log('loading trackers');
        var tag = document.createElement("script");
        tag.src = "https://www.googletagmanager.com/gtag/js?id=GTM_TRACKING_ID";
        document.getElementsByTagName("head")[0].appendChild(tag);
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', '<%= ENV["GA_TRACKING_ID"] %>');

        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () {
                (h.hj.q = h.hj.q || []).push(arguments)
            };
            h._hjSettings = {
                hjid: 12345,
                hjsv: 6
            };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }}
  />
  
  <AlertBanner title="Coronavirus (COVID-19)" uid="homealert" children={AlertMessage} />
  
  <PageStructures.HomeHero
    promotedLinksArray={[
        {
            title: "Make a payment",
            url: "/"
        },
        {
            title: "Contact the council",
            url: "/"
        },
        {
            title: "About our new website",
            url: "/"
        }
    ]}
    imagesArray={heroArray}
  />

  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <PageStructures.ServicesLinksList 
          serviceLinksArray={servicesArray}
        />
        { numberOfPromos > 0 &&
          <>
            <PageStructures.PromoBanner
              title="Volunteer at a local Covid-19 vaccine centre"
              ctaUrl="/"
              ctaText="How to become a volunteer"
              image1440x810="https://images.unsplash.com/photo-1612277795315-26dd8dcdc8a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              image144x81="https://imgur.com/lIHCSwV.jpg"
            >
              <p>We’re looking for people to come forward and help deliver the Covid-19 vaccination programme in North Northamptonshire.</p>
            </PageStructures.PromoBanner>
            <PageStructures.PromoBlock promos={promoData.promos.slice(0, numberOfPromos - 1)} />
          </>
        }

        <PageStructures.NewsArticleFeaturedBlock articles={newsArticleData.articles.slice(0, numberOfNewsStories)} viewAllLink="/news/" />

        <HomeUnitarySection />

      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    
    <PageStructures.Footer
      footerLinksArray={[
        {
          title: "About",
          url: "/"
        },
        {
          title: "Accessibility",
          url: "/"
        },
        {
          title: "Cookies",
          url: "/"
        },
        {
          title: "Contact us",
          url: "/"
        },
        {
          title: "Jobs",
          url: "/"
        },
        {
          title: "Newsletter",
          url: "/"
        }
      ]}
    />
  </>
);
