import React from 'react';
import { HeroImageProp } from '../../structure/HomeHero/HomeHero.types';
import { NewsArticleProps } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { PromoBannerProps } from '../../structure/PromoBanner/PromoBanner.types';
import { PromoProps } from '../../structure/PromoBlock/PromoBlock.types';
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
   * Title of the alert banner
   */
  alertBannerTitle: string;

  /**
   * Content of the alert banner
   */
  alertBannerContent: React.ReactNode;

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
   * Should the services list be boxed
   */
  isBoxed?: boolean;

  /**
   * News articles
   */
  newsArticlesArray: NewsArticleProps[];

  /**
   * Promo banner
   */
  promoBannerData: PromoBannerProps;

  /**
   * Promo banner content (children)
   */
  promoBannerContent: React.ReactNode;

  /**
   * Promo blocks
   */
  promoBlocksArray: Array<PromoProps>;

  /**
   * Footer links
   */
  footerLinksArray: Array<PageLinkProp>;

  showSearch: boolean;
}
