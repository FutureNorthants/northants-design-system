import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import AlertBanner from '../../structure/AlertBanner/AlertBanner';
import HomeUnitarySection from '../../structure/HomeUnitarySection/HomeUnitarySection';
import { newsArticleData } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlockData';

import ServicesLinksList from "../../structure/ServicesLinksList/ServicesLinksList";
import PromotedLinks from "../../components/PromotedLinks/PromotedLinks";
import { ThemeProvider } from 'styled-components';
import { GDS_theme, north_theme, west_theme, lb_theme_north, lb_theme_west } from '../../../themes/theme_generator';
export interface MemorialPageProps {
  heroArray: Array<HeroImageProp>;
  servicesArray: Array<PageLinkProp>;
}
interface HeroImageProp {
  /**
   * The url of the image
   */
  image1440x810: string;
  /**
   * The url of the image in 10x smaller for lazy loading
   */
  image144x81: string;
  /**
   * Optional alt text for the image - this should only be included if the image contains content that is important to users and not purely decorative
   */
  imageAltText?: string;
}


const submitInfo = [{
  postTo: "/search",
  params: {
      type: "search"
  }
}]
const AlertMessage = <p>Coronavirus | National lockdown: stay at home. <a href="/">Learn what this means for residents and workers here</a></p>


const serviceLinksArray = [
  {
    title: "Condolence book", 
    url: "/",
    iconKey: "condolenceBook",
    quickLinksArray: [
      {
        title: "Sign the condolence book and leave a tribute", 
        url: "/",
      }
    ]
  },
];


const councilServicesLinksArray = [
  {
    title: "Proceed to council services", 
    url: "#all-services",
  }
];

const memorialServiceLinksArray = [
  {
    title: "The Royal Website", 
    url: "/",
    iconKey: "royalWebsite",
    quickLinksArray: [
      {
        title: "Details and announcements of the funeral of ...", 
        url: "/",
      }
    ]
  },{
    title: "Guidance for the Period of National Mourning", 
    url: "/",
    iconKey: "govUK",
    quickLinksArray: [
      {
        title: "Information and key links regarding national mourning", 
        url: "/",
      }
    ]
  },{
    title: "The Royal Website", 
    url: "/",
    iconKey: "royalWebsite",
    quickLinksArray: [
      {
        title: "Details and announcements of the funeral of ...", 
        url: "/",
      }
    ]
  }
];


const ExampleMemorialHeroArgs = {
  src: "/hero-image.png",
  placeholder: "/hero-image.png",
  alt: "Image showing ...",
  children: <ServicesLinksList hasBackground={true} hideHeader={true} serviceLinksArray={serviceLinksArray} oneCol={true} />,
  councilServices: <ServicesLinksList oneCol={true} hasBackground={true} hideHeader={true} serviceLinksArray={councilServicesLinksArray} />,
  theme:  north_theme,
};

export const MemorialPage: React.FC<MemorialPageProps> = ({ heroArray, servicesArray }) => {
  
  
  // console.log(decorators);
  return (
  <>
    <PageStructures.CookieBanner 
      title="We use cookies on this site to enhance your user experience"
      paragraph={<p>By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a></p>}
      acceptButtonText="Accept cookies policy"
      rejectButtonText= "No, thanks"
      acceptCallback={() => {
        console.log('loading trackers');
        var tag = document.createElement("script");
        tag.src = "https://www.googletagmanager.com/gtag/js?id=<%= ENV[\"GTM_TRACKING_ID\"] %>";
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


  <ThemeProvider theme={lb_theme_north}>
    <PageStructures.Header />
    <PageStructures.MemorialHero {...ExampleMemorialHeroArgs} />


    
    <PageStructures.PageWrapper colour="grey_light">
    <PageStructures.MaxWidthContainer noBackground={true}>
      <ServicesLinksList  hideHeader={true} serviceLinksArray={memorialServiceLinksArray}  /> 
      <PageStructures.NewsArticleFeaturedBlock articles={newsArticleData.articles} viewAllLink="/news/" />
    </PageStructures.MaxWidthContainer>
    </PageStructures.PageWrapper>
  </ThemeProvider>


  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>

        <PageStructures.ServicesLinksList 
          serviceLinksArray={servicesArray}
        />
        <PageStructures.PromoBanner 
          title="Volunteer at a local Covid-19 vaccine centre"
          ctaUrl="/"
          ctaText="How to become a volunteer"
          image1440x810="https://images.unsplash.com/photo-1612277795315-26dd8dcdc8a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          image144x81="https://imgur.com/lIHCSwV.jpg"
        >
          <p>We’re looking for people to come forward and help deliver the Covid-19 vaccination programme in North Northamptonshire.</p>
        </PageStructures.PromoBanner>

        <HomeUnitarySection />

        <PageStructures.NewsArticleFeaturedBlock articles={newsArticleData.articles} viewAllLink="/news/" />

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
)
};

interface PageLinkProp {
  /**
  * Title of the page
  */
  title: string;
  /**
  * URL of the page
  */
  url: string;
  /**
  * URL of the svg icon for the service landing page
  */
  iconKey?: string;
  /**
  * Array of quick links for the service
  */
 quickLinksArray: Array<QuickLinkProp>;
}
interface QuickLinkProp {
/**
* Title of the page
*/
title: string;
/**
* URL of the page
*/
url: string;
}