export interface SectionLinksProps {
  /**
   * The title of the section
   */
  sectionTitle: string;

  /**
   * If there is only one section then do not dieplay the title
   */
  displayTitle?: boolean;

  /**
   * A url slug for the section title
   */
  sectionSlug: string;

  /**
   * An array of page links that sit under this section
   */
  pageLinksArray: Array<PageLinkProp>;

  /**
   * Should the section links have images
   */
  hasImages?: boolean;
}

export interface PageLinkProp {
  /**
   * Title of the page
   */
  title: string;

  /**
   * Summary of the page
   */
  summary: string;

  /**
   * URL of the page
   */
  url: string;

  /**
   * Is the link to an external website?
   */
  isExternal?: boolean;

  /**
   * The small image url
   */
  imageSmall?: string | null;

  /**
   * The large image url
   */
  imageLarge?: string | null;

  /**
   * The image alt text
   */
  imageAltText?: string | null;
}
