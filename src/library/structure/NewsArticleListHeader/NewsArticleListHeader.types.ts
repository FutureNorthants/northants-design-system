
import { SortByValsProps } from './../../components/SortBy/SortBy.types';

export interface NewsArticleListHeaderProps {
  totalResults: number;
  sortBy: string;
  sortByOptions: Array<SortByValsProps>;
}
