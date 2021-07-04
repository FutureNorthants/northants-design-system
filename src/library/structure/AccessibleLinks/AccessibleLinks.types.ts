
export interface AccessibleLinkProps {
    /**
     * An array of links for the accessible links section at the top of the page, for things like accessibility message and feedback form 
     */
    AccessibleLinksArray?: Array<AccessibleLinkProp>;
  }
export interface AccessibleLinkProp {
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
