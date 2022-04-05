export interface ServiceLinksBoxedProps {
  /**
   * An array of all the top level service landing pages
   */
  serviceLinksArray: Array<PageLinkProp>;

  /**
   * Display a white background on each block
   */
  hasBackground?: boolean;

  /**
   * Hide the header
   */
  hideHeader?: boolean;

  /**
   * Show everything in a single column
   */
  oneCol?: boolean;

  /**
   * Id of container
   */
  serviceId?: string;
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
  quickLinksArray?: Array<QuickLinkProp>;

  quickLinksShow?: boolean;
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

export interface MemorialQuickLinkProp {
  /**
   * The key of the icon
   */
  iconKey?: string;

  /**
   * An array of Quick Links
   */
  link: Array<QuickLinkProp>;

  /**
   * Some summary text
   */
  summary: string;
}
