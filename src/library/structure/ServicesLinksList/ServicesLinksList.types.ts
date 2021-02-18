
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
    * URL of the svg icon for the service landing page
    */
    iconURL?: string;
    /**
    * URL of the svg icon in a hover style for the service landing page
    */
    iconHoverURL?: string;
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
