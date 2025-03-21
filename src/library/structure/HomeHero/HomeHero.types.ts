import { PromotedServicesTabsProps } from '../PromotedServicesTabs/PromotedServicesTabs.types';

export interface HomeHeroProps {
  /**
   * The line of text before the logo
   */
  topline?: string;

  /**
   * URL of an alternative logo to override the preset ones (520 x 150 px)
   */
  imageOverrideLogo?: string;

  /**
   * Alt text for overridden logo
   */
  imageOverrideLogoAltText?: string;

  /**
   * The line of text after the logo
   */
  strapline?: string;

  /**
   * The images for the hero, minimum of one
   */
  imagesArray: Array<HeroImageProp>;

  /**
   * The main promoted links, an array that should be from 1-4, preferably 3
   */
  promotedLinksArray: Array<PromotedLinkProp>;

  /**
   * Array of suggestion strings for autocomplete search input
   */
  searchSuggestions?: string[];

  /**
   * Should the search box be shown?
   */
  showSearch?: boolean;

  /**
   * Optional promoted services tabs
   */
  promotedServicesTabs?: PromotedServicesTabsProps;
}

export interface HeroImageProp {
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

export interface PromotedLinkProp {
  /**
   * The title of the link
   */
  title: string;

  /**
   * The url of the link
   */
  url: string;
}
