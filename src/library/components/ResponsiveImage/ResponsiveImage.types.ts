export interface ResponsiveImageProps {
  /**
   * The small image url
   */
  imageSmall: string;

  /**
   * The large image url
   */
  imageLarge: string;

  /**
   * The image alt text
   */
  imageAltText: string;

  /**
   * The width of the small image in pixels
   */
  smallWidth: string;

  /**
   * The width of the large image in pixels
   */
  largeWidth: string;

  /**
   * The image ratio, either '4by3', '16by9', '4by1' or 'auto'
   */
  ratio: string;

  /**
   * The optional object fit. Defaults to cover
   */
  objectFit?: string;
}
