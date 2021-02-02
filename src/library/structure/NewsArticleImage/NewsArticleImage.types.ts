export interface NewsArticleImageProps {
  /**
   * The url of the image
   */
  image1920x1080: string;
  /**
   * The url of the image in 10x smaller for lazy loading
   */
  image192x108: string;
  /**
   * Optional alt text for the image - this should only be included if the image contains content that is important to users and not purely decorative
   */
  imageAltText?: string;
  /**
   * An optional caption to be presented underneath the image
   */
  imageCaption?: string;
}
