export interface ImageProps {
  /**
   * The large image url
   */
  imageLarge: string;

  /**
   * The small image url
   */
  imageSmall: string;

  /**
   * The image alt text to describe the image
   */
  imageAltText?: string;

  /**
   * The image ratio, either '4by3' or '16by9'
   */
  ratio: string;

  /**
   * The optional image caption that goes under the image
   */
  caption?: string;
}
