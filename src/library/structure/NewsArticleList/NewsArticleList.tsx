
import React from "react";

import { NewsArticleListProps } from "./NewsArticleList.types";
import * as Styles from "./NewsArticleList.styles";
import NewsArticleDate from "../NewsArticleDate/NewsArticleDate";

const NewsArticleList: React.FC<NewsArticleListProps> = ({ results, totalResults, sortBy, pageNumber }) => (
    <Styles.Container data-testid="NewsArticleList">

    {results.map((article) => 
        <div key={article.id}>
            <Styles.Title>{article.title}</Styles.Title>
            <Styles.Excerpt>{article.excerpt}</Styles.Excerpt>
            
            <NewsArticleDate text={article.date} />
            
                
                {article.image &&
                <Styles.Image src={article.image} />
                }
    
        </div>
    )}

    </Styles.Container>
);

export default NewsArticleList;
