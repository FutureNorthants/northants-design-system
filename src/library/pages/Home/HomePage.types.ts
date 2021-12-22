import React from "react";
import { HeroImageProp } from "../../structure/HomeHero/HomeHero.types";
import { NewsArticleProps } from "../../structure/NewsArticleList/NewsArticleList.types";
import { PromoBannerProps } from "../../structure/PromoBanner/PromoBanner.types";
import { PromoProps } from "../../structure/PromoBlock/PromoBlock.types";
import { PageLinkProp } from "../../structure/ServicesLinksList/ServicesLinksList.types";

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
   * Title of the alert banner
   */
  alertBannerTitle: string;

  /**
   * Content of the alert banner
   */
  alertBannerContent: React.Component;

  /**
   * Hero images
   */
  heroArray: Array<HeroImageProp>;

  /**
   * Promoted links
   */
  promotedLinksArray: Array<PageLinkProp>;

  /**
   * Service links
   */
  servicesArray: Array<PageLinkProp>;

  /**
   * News articles
   */
  newsArticlesArray: Array<NewsArticleProps>;

  /**
   * Promo banner
   */
  promoBannerData: PromoBannerProps;

  /**
   * Promo banner content (children)
   */
  promoBannerContent: React.Component;

  /**
   * Promo blocks
   */
  promoBlocksArray: Array<PromoProps>;

  /**
   * Footer links
   */
  footerLinksArray: Array<PageLinkProp>;
}