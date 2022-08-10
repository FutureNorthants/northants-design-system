export interface PostCodeSearchApolloProps {
  /**
   * Title of postcode search link
   */
  title?: string;

  /**
   * Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage
   */
  otherCouncilLink?: string;
}
