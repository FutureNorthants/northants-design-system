
import React from "react";
import LazyImage from "react-lazy-progressive-image";

import { NewsArticleFeaturedBlockProps } from "./NewsArticleFeaturedBlock.types";
import * as Styles from "./NewsArticleFeaturedBlock.styles";
import NewsArticleDate from "../NewsArticleDate/NewsArticleDate";
import { Heading } from "../../..";
import Button from "../../components/Button/Button";

const NewsArticleFeaturedBlock: React.FC<NewsArticleFeaturedBlockProps> = ({ articles, withoutTitle = false, viewAllLink ="/" }) => {
    if(articles && articles.length > 0) {
        return (
            <>
            {!withoutTitle &&
                <Heading text="News articles and press releases" />
            }
            <Styles.Container>
                {articles.map((article) => 
                    <Styles.ArticleContainer key={article.id} href={article.url}>
                        {article.thumbnail &&
                            <LazyImage
                                src={article.image}
                                placeholder={article.thumbnail}
                                visibilitySensorProps={{
                                    partialVisibility: true
                                }}
                            >
                            {src => 
                                <Styles.ImageContainer background={src} role="img" aria-label={article.imageAlt ? article.imageAlt : ""}></Styles.ImageContainer>
                            }
                            </LazyImage>
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
