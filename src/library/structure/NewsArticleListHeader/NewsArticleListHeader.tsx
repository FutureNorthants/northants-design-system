
import React from "react";

import { NewsArticleListHeaderProps } from "./NewsArticleListHeader.types";
import * as Styles from "./NewsArticleListHeader.styles";
import SortBy from "../../components/SortBy/SortBy";

const NewsArticleListHeader: React.FC<NewsArticleListHeaderProps> = ({ totalResults, sortBy, sortByOptions }) => (
    <Styles.Container data-testid="NewsArticleListHeader">
        <Styles.LeftCol>{totalResults} articles</Styles.LeftCol>
        <Styles.RightCol><SortBy selected={sortBy} options={sortByOptions} /></Styles.RightCol>
    </Styles.Container>
);

export default NewsArticleListHeader;

