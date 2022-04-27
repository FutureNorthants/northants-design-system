export interface ContentsProps {
  /**
   * An array of content links
   */
  contents: ContentLink[];

  /**
   * The optional current path
   */
  currentPath?: string;

  /**
   * The optional contents title, defaults to 'Contents'
   */
  title?: string;
}

export interface ContentLink {
  /**
   * Title of the page
   */
  title: string;
  /**
   * URL of the page
   */
  url: string;
}
