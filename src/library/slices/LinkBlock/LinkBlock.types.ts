export interface LinkBlockProps {
  /**
   * The title for the link block
   */
  title: string;

  /**
   * An array of links
   */
  links: BlockLink[];

  /**
   * The optional alt text
   */
  imageAltText?: string | null;

  /**
   * The optional small image url
   */
  imageSmall?: string | null;

  /**
   * The optional large image url
   */
  imageLarge?: string | null;
}

export interface BlockLink {
  /**
   * The url for the link
   */
  url: string;

  /**
   * The text for the link
   */
  title: string;

  /**
   * The optional summary text to describe the link
   */
  summary?: string | null;
}
