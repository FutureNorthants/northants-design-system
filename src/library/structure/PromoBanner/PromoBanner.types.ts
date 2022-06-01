export interface PromoBannerProps {
  /**
   * Title of the promo banner
   */
  title: string;

  /**
   * Call to action text
   */
  ctaText: string;

  /**
   * Call to action url
   */
  ctaUrl: string;

  /**
   * The url of the image
   */
  image1440x810: string;

  /**
   * The url of the image in 10x smaller for lazy loading
   */
  image144x81: string;

  /**
   * The children used for the text section of the promo banner
   */
  children: React.ReactNode;
}
