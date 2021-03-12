
export interface NewsArticleFeaturedBlockProps {
  /**
   * Array of results
   */
  articles: Array<NewsArticleProps>;
  /**
   * Optionally dont display the title
   */
  withoutTitle?: boolean;
  /**
   * Optionally add a button to view all news
   */
  viewAllLink?: string;
}


export interface NewsArticleProps {
  id: string;
  url: string;
  title: string;
  date: number;
  image: string;
  thumbnail: string;
  imageAlt?: string;
}