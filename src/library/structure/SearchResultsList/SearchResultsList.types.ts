import {SignpostLinkProp} from '../../components/SignpostLinksList/SignpostLinksList.types'
export interface SearchResultsListProps {
  /**
   * What you searched for
   */
  searchTerm: string;
  /**
   * Array of results
   */
  results: Array<SearchResultProps>;
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
}

