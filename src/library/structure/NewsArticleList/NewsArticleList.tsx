
import React from "react";

import { NewsArticleListProps } from "./NewsArticleList.types";
import * as Styles from "./NewsArticleList.styles";
import NewsArticleDate from "../NewsArticleDate/NewsArticleDate";

const NewsArticleList: React.FC<NewsArticleListProps> = ({ results }) => {
    const extractLength = 140;

    if(results && results.length > 0) {
    return (
    <Styles.Container data-testid="NewsArticleList">
    {results.map((article) => 
        <Styles.ArticleContainer key={article.id}>
            <Styles.ArticleContent>
                <Styles.Title href={article.url}>{article.title}</Styles.Title>
                {(article.excerpt.length > extractLength) ? article.excerpt.substr(0, extractLength-1).trim() + String.fromCharCode(8230) : article.excerpt}
                <NewsArticleDate text={article.date.toString()} format="X" />
            </Styles.ArticleContent>
            {article.image720x405 &&
                <Styles.ImageContainer background={article.image720x405} ></Styles.ImageContainer>
            }
    
        </Styles.ArticleContainer>
    )}
    </Styles.Container>
    )
        }
        else {
                return (
                    <Styles.Container data-testid="NewsArticleList">
                        <Styles.ResultInfo>No results found</Styles.ResultInfo>
                    </Styles.Container>
                );
        }

};

export default NewsArticleList;
