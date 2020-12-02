export interface HeaderProps {
  /**
   * Is the page this component on the homepage? Defaults to false
   */
  isHomepage?: boolean;
  /**
   * Link to the root of the website that will be used on the logo
   */
  homeLink?: string;
  /**
   * Link to the list of all services that will be used on the logo
   */
  allServicesLink?: string;
}
