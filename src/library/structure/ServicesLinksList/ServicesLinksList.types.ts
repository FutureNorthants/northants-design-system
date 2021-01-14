
export interface ServicesLinksListProps {
  /**
   * An array of all the top level service landing pages
   */
  serviceLinksArray: Array<PageLinkProp>;
  /**
   * An array of all the top level service landing pages
   */
  withReorder?: Boolean;
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
    * A number representing the original order of this in the array
    */
    originalOrder: number;
    // /**
    // * URL of the svg icon for the service landing page
    // */
    // iconURL: string;
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
