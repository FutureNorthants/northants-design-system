export interface HomeHeroProps {
   /**
   * The line of text before the logo
   */
  topline?: string;
  /**
   * The line of text after the logo
   */
  strapline?: string;
  /**
   * The images for the hero, minimum of one
   */
  imagesArray: Array<HeroImageProp>;
  /**
   * The 3 main promoted links
   */
  promotedLinksArray: Array<PromotedLinkProp>;
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