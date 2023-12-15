import React from 'react';
import { NewsArticleFeaturedBlockProps } from './NewsArticleFeaturedBlock.types';
import * as Styles from './NewsArticleFeaturedBlock.styles';
import NewsArticleDate from '../NewsArticleDate/NewsArticleDate';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Image from 'next/image';

/**
 * Block displaying up to 9 news article tiles, with image, title and date for each
 */
const NewsArticleFeaturedBlock: React.FunctionComponent<NewsArticleFeaturedBlockProps> = ({
  articles,
  withoutTitle = false,
  viewAllLink = '/',
}) => {
  if (articles && articles.length > 0) {
    return (
      <>
        {!withoutTitle && <Heading text="News articles and press releases" />}
        <Styles.Container>
          <Row isList>
            {articles.map((article) => (
              <Column isList small="full" medium="one-half" large="one-third" key={article.id}>
                <Styles.ArticleContainer href={article.url}>
                  <Row>
                    {article.image720x405 && (
                      <Column small="full" medium="full" large="full" hasPadding={false}>
                        <Styles.ImageContainer>
                          <Image
                            src={article.image720x405}
                            alt={article.imageAltText ?? ''}
                            fill
                            placeholder="blur"
                            blurDataURL={article.image72x41}
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                        </Styles.ImageContainer>
                      </Column>
                    )}
                    <Column small="full" medium="full" large="full">
                      <Styles.ArticleContent>
                        <Styles.Title className="article_title">{article.title}</Styles.Title>
                        <Styles.DateContainer>
                          <NewsArticleDate text={article.date.toString()} format="X" />
                        </Styles.DateContainer>
                      </Styles.ArticleContent>
                    </Column>
                  </Row>
                </Styles.ArticleContainer>
              </Column>
            ))}
          </Row>
        </Styles.Container>
        {viewAllLink && (
          <Styles.ViewAllContainer>
            <Button text="View all news" primary={false} url={viewAllLink} size="large" />
          </Styles.ViewAllContainer>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default NewsArticleFeaturedBlock;
