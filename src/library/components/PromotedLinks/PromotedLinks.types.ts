export interface PromotedLinksProps {
  /**
   * The main promoted links, an array that should be from 1-4, preferably 3
   */
  promotedLinksArray: Array<PromotedLinkProp>;

  /**
   * One column layout
   */
  oneCol?: boolean;

  /**
   * Should the promoted links be displayed as tabs?
   */
  hasTabs?: boolean;
}

export interface PromotedLinkProp {
  /**
   * The title of the link
   */
  title: string;

  /**
   * The url of the link
   */
  url: string;
}
