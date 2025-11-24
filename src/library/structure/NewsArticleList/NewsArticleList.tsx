import React from 'react';
import { NewsArticleListProps } from './NewsArticleList.types';
import * as Styles from './NewsArticleList.styles';
import NewsArticleDate from '../NewsArticleDate/NewsArticleDate';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const NewsArticleList: React.FunctionComponent<NewsArticleListProps> = ({ results }) => {
  const extractLength = 140;

  if (results && results.length > 0) {
    return (
      <Styles.Container data-testid="NewsArticleList">
        <Row isList>
          {results.map((article) => (
            <Column isList small="full" medium="full" large="full" key={article.id}>
              <Styles.ArticleContainer href={article.url} title={article.title}>
                {article.image720x405 && (
                  <Styles.ImageContainer className="news-article-list__image">
                    <ResponsiveImage
                      imageSmall={article.image72x41}
                      imageLarge={article.image720x405}
                      imageAltText={article.imageAltText ?? 'News article'}
                      smallWidth="400"
                      largeWidth="720"
                      ratio="16by9"
                      objectFit="contain"
                    />
                  </Styles.ImageContainer>
                )}
                <Styles.ArticleContent $withImage={!!article.image720x405}>
                  <Styles.Title className="news-article-list__title">{article.title}</Styles.Title>
                  {article.excerpt.length > extractLength
                    ? article.excerpt.substring(0, extractLength - 1).trim() + String.fromCharCode(8230)
                    : article.excerpt}
                  <Styles.DateContainer>
                    <NewsArticleDate text={article.date.toString()} format="X" />
                  </Styles.DateContainer>
                </Styles.ArticleContent>
              </Styles.ArticleContainer>
            </Column>
          ))}
        </Row>
      </Styles.Container>
    );
  } else {
    return (
      <Styles.Container data-testid="NewsArticleList">
        <Styles.ResultInfo>No results found</Styles.ResultInfo>
      </Styles.Container>
    );
  }
};

export default NewsArticleList;
