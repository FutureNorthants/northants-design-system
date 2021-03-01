
export interface ServicesLinksListProps {
  /**
   * An array of all the top level service landing pages
   */
  serviceLinksArray: Array<PageLinkProp>;
}
export interface PageLinkProp {
    /**
    * Title of the page
    */
    title: string;
    /**
    * URL of the page
    */
    url: string;
    /**
    * The key of the icon
    */
    iconKey?: string;
    /**
    * Array of quick links for the service
    */
   quickLinksArray: Array<QuickLinkProp>;
}
export interface QuickLinkProp {
  /**
  * Title of the page
  */
  title: string;
  /**
  * URL of the page
  */
  url: string;
}
