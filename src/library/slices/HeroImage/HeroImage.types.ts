export interface HeroImageProps {
  /**
   * Headline text, optional
   */
  headline?: string;
  
  /**
   * Any text after the headline and before the call to action, optional
   */
  content?: string;
  
  /**
   * URL of the hero image (1440x810)
   */
  imageLarge: string;

  /**
  * URL of the a smaller version of the image for lazy loading
  */
  imageSmall: string;

  /**
   * Optional alt text for the image - this should only be included if the image contains content that is important to users and not purely decorative
   */
  imageAltText?: string;

  /**
   * Optional call to action text
   */
  callToActionText?: string;

  /**
   * Optional call to action link URL
   */
  callToActionURL?: string;

  /**
   * Set to true to sit the text and call to action on a white box
   */
  backgroundBox: boolean;
}
