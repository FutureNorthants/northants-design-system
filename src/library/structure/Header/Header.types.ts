export interface HeaderProps {
  /**
   * Hide the searchbar, set to true on the search page so there aren't two search inputs.
   */
  hideSearchBar?: boolean;

  /**
   * Link to the root of the website that will be used on the logo
   */
  homeLink?: string;

  /**
   * Link to the list of all services displayed at top right (#all-services anchor added to this)
   */
  allServicesLink?: string;

  /**
   * This flag is used to alter the all-services link to an in-page anchor if true
   */
  isHomepage?: boolean;

  /**
   * Array of suggestions for the autocomplete input in the search bar
   */
  searchSuggestions?: string[];
}
