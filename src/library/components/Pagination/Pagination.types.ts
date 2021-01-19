
export interface PaginationProps {
  /**
   * What page are we on?
   */
  currentPage: number;
  /**
   * How many results are we showing per page defaults to 10
   */
  resultsPerPage?: number;
  /**
   * What is the total number of results
   */
  totalResults: number;
  /**
   * the maximim number of numbers that will show  - defaults to 5
   */
  maxNumbers?: number
}
