export interface BackLinkProps {
  /**
   * The optional uri to navigate back to
   */
  link?: string;

  /**
   * Should the browser history be used instead of the link?
   */
  useHistory?: boolean;
}
