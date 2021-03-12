
export interface NewsArticleListProps {
  /**
   * Array of results
   */
  results: Array<NewsArticleProps>,
  /**
   * The total number of results
   */
  totalResults?: number;
  /**
   * The current page number
   */
  pageNumber?: number;
  /**
   * What we're currently sorting by
   */
  sortBy?: string
}


export interface NewsArticleProps {
  id: string,
  title: string,
  excerpt: string,
  date: number,
  image720x405: string,
  image72x41: string,
  imageAltText?: string,
  url: string
}