export interface PromoTabsProps {
  /**
   * The promo tiles to show
   */
  promos: Array<PromoProps>;
}

export interface PromoProps {
  /**
   * The title of the promo
   */
  title: string;

  /**
   * Basic HTML content (no embedded slices) for the promo main body
   */
  content: string;

  /**
   * Text for the call to action link
   */
  callToActionText: string;

  /**
   * URL for the call to action link
   */
  callToActionURL: string;

  /**
   * Medium image (larger only used by main promo banner)
   */
  imageMedium: string;

  /**
   * Small placeholder image for lazy loading medium image
   */
  imageSmall: string;

  /**
   * Alt text for image
   */
  imageAltText?: string;
}
