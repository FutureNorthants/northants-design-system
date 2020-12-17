
export interface TitledLinkListProps {
  /**
   * What is this?
   */
  Title: string;
  Sections: Array<SectionsProps>
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
