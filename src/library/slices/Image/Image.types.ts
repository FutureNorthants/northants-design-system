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
  imageAltText?: string | null;

  /**
   * The image ratio, either '4by3', '16by9' or '4by1'
   */
  ratio: string;

  /**
   * The optional image caption that goes under the image
   */
  caption?: string | null;

  /**
   * Set to true to have following text wrap against image
   */
  wrapText?: boolean;
}
