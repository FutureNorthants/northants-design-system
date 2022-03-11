export interface NewsArticleFeaturedBlockProps {
  /**
   * Array of news article data
   */
  articles: Array<NewsArticleProps>;

  /**
   * Optionally do not display the title
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
  image720x405: string;
  image72x41: string;
  imageAltText?: string;
}
