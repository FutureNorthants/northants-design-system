export interface SectionLinksSidebarProps {
  /**
   * Title
   */
  Title: string;

  /**
   * An array of sections
   */
  Sections: Array<SectionsProps>;
}

export interface SectionsProps {
  /**
   * The optional section title
   */
  SectionTitle?: string;

  /**
   * The array of section links
   */
  SectionLinks: Array<LinksProp>;
}

export interface LinksProp {
  /**
   * Title of the page
   */
  title: string;

  /**
   * URL of the page
   */
  url: string;

  /**
   * Is this the current page
   */
  isCurrent?: boolean;
}
