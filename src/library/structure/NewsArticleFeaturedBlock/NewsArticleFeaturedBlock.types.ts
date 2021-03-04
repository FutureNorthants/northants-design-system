
export interface NewsArticleFeaturedBlockProps {
  /**
   * Array of results
   */
  articles: Array<NewsArticleProps>;
  /**
   * Optionally dont display the title
   */
  withoutTitle?: boolean;
}


export interface NewsArticleProps {
  id: string;
  url: string;
  title: string;
  date: number;
  thumbnail: string;
}