import { SignpostLinkProp } from '../../components/SignpostLinksList/SignpostLinksList.types';

export interface SearchResultsListProps {
  /**
   * What you searched for
   */
  searchTerm: string;

  /**
   * Array of results
   */
  results: Array<SearchResultProps>;

  /**
   * The total number of results
   */
  totalResults?: number;

  /**
   * The current page number
   */
  pageNumber?: number;
}

export interface SearchResultProps {
  /**
   * Search result title
   */
  title: string;

  /**
   * Link to page
   */
  link: string;

  /**
   * Summary of page
   */
  summary: string;

  /**
   * If it contains signposting links include them here
   */
  signpostLinksArray?: Array<SignpostLinkProp>;

  /**
   * Optional override for the top line of text
   */
  TopLineText?: string;

  /**
   * If there is a service area tied to the result
   */
  service?: string;

  /**
   * How long ago the page was last edited or news article was published
   */
  published?: string;
}
