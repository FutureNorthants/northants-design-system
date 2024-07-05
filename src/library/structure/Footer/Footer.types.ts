export interface FooterProps {
  /**
   * An array of links for the bottom of the footer, for things like cookie and privacy policies
   */
  footerLinksArray?: Array<FooterLinkProp>;

  /**
   * The year for the copyright
   */
  year?: string;

  /**
   * Should the footer have google translate? Defaults to false.
   */
  hasTranslate?: boolean;
}

export interface FooterLinkProp {
  /**
   * Title of the link
   */
  title: string;

  /**
   * URL of the link
   */
  url: string;

  /**
   * Is the link to an external website?
   */
  isExternal?: boolean;
}
