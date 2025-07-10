import React from 'react';
import { NewsArticleProps } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { PromoBannerProps } from '../../structure/PromoBanner/PromoBanner.types';
import { PromoProps } from '../../structure/PromoBlock/PromoBlock.types';
import { PageLinkProp } from '../../structure/ServicesLinksList/ServicesLinksList.types';

export interface MemorialPageProps {
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
   * Condolence links on memorial hero
   */
  condolenceLinksArray: Array<PageLinkProp>;

  /**
   * Links below memorial hero
   */
  memorialServiceLinksArray: Array<PageLinkProp>;

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
  newsArticlesArray: Array<NewsArticleProps>;

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
}
