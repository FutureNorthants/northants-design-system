
import React from "react";
import LazyImage from "react-lazy-progressive-image";
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
                            {article.image720x405 &&
                                <LazyImage
                                    src={article.image720x405}
                                    placeholder={article.image72x41}
                                    visibilitySensorProps={{
                                        partialVisibility: true
                                    }}
                                >
                                {src => 
                                    <Styles.ImageContainer className="news-article-list__image" background={src} role="img" aria-label={article.imageAltText ? article.imageAltText : ""}></Styles.ImageContainer>
                                }
                                </LazyImage>
                            }
                            <Styles.ArticleContent withImage={article.image720x405 ? true : false}>
                                <Styles.Title href={article.url} className="news-article-list__title">{article.title}</Styles.Title>
                                {(article.excerpt.length > extractLength) ? article.excerpt.substr(0, extractLength-1).trim() + String.fromCharCode(8230) : article.excerpt}
                                <Styles.DateContainer><NewsArticleDate text={article.date.toString()} format="X" /></Styles.DateContainer>
                            </Styles.ArticleContent>
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
