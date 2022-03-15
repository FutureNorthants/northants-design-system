import { BreadcrumbProp } from '../Breadcrumbs/Breadcrumbs.types';

export interface HeroImageProps {
  /**
   * Headline text, optional. Intention to use page title if missing.
   */
  headline?: string;

  /**
   * Any text after the headline and before the call to action, optional
   */
  content?: string;

  /**
   * URL of the hero image (min 400pix high)
   */
  imageLarge: string;

  /**
   * URL of the a smaller version of the image for lazy loading
   */
  imageSmall: string;

  /**
   * Optional alt text for the image - ideally the image should be decorative only and not require a long description
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
   * Set to true to put the text and call to action on a white box, false to overlay on a darkened image
   */
  backgroundBox: boolean;

  /**
   * An optional breadcrumb. If not set then the breadcrumb is not shown
   */
  breadcrumb?: BreadcrumbProp;
}
