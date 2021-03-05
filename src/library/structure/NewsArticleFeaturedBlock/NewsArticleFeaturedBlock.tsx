
import React from "react";

import { NewsArticleFeaturedBlockProps } from "./NewsArticleFeaturedBlock.types";
import * as Styles from "./NewsArticleFeaturedBlock.styles";
import NewsArticleDate from "../NewsArticleDate/NewsArticleDate";
import { Heading } from "../../..";
import Button from "../../components/Button/Button";

const NewsArticleFeaturedBlock: React.FC<NewsArticleFeaturedBlockProps> = ({ articles, withoutTitle = false, viewAllLink }) => {
    if(articles && articles.length > 0) {
        return (
            <>
            {!withoutTitle &&
                <Heading text="News articles and press releases" />
            }
            <Styles.Container>
                {articles.map((article) => 
                    <Styles.ArticleContainer key={article.id} href={article.url} title="Read the article">
                        {article.thumbnail &&
                            <Styles.ImageContainer background={article.thumbnail} ></Styles.ImageContainer>
                        }
                        <Styles.ArticleContent>
                            <Styles.Title className="article_title">{article.title}</Styles.Title>
                            <Styles.DateContainer><NewsArticleDate text={article.date.toString()} format="X" /></Styles.DateContainer>
                        </Styles.ArticleContent>
                    </Styles.ArticleContainer>
                )}
            </Styles.Container>
            {viewAllLink &&
                <Styles.ViewAllContainer>
                    <Button text="View all news" primary={false} url={viewAllLink} size="large" />
                </Styles.ViewAllContainer>
            }
            </>
        )
    } else {
        return (
            <></>
        )
    }
};

export default NewsArticleFeaturedBlock;
