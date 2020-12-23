
export interface SectionLinksSidebarProps {
  /**
   * Title
   */
  Title: string;
  Sections: Array<SectionsProps>
  /**
   * We assume this is only going to be used as a sidebar - if not then add this to special styles.
   */
  isInline?: Boolean
}

export interface SectionsProps {
  SectionTitle?: string;
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
