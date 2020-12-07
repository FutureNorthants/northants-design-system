
export interface FooterProps {
  /**
   * What is this?
   */
  footerLinksArray: Array<FooterLinkProp>;
  /**
   * What is this?
   */
  year?: string;
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
