
export interface NewsArticleListProps {

  results: Array<NewsArticleProps>,
  /**
   * total number of returned articles
   */
  // totalResults: number,

  sortBy?: number,

  // pageNumber: number
}


export interface NewsArticleProps {
  id: string,
  title: string,
  excerpt: string,
  date: string,
  image: string
}