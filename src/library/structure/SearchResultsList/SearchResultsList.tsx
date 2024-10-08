import React, { useContext } from 'react';
import { SearchResultsListProps } from './SearchResultsList.types';
import * as Styles from './SearchResultsList.styles';
import SignpostLinksList from '../../components/SignpostLinksList/SignpostLinksList';
import { ThemeContext } from 'styled-components';
import NewsArticleOldBanner from '../NewsArticleOldBanner/NewsArticleOldBanner';

const SearchResultsList: React.FunctionComponent<SearchResultsListProps> = ({
  searchTerm,
  results,
  totalResults = 0,
  pageNumber = 0,
}) => {
  const themeContext = useContext(ThemeContext);
  const isOld = (date): boolean => {
    const currentDate = new Date();
    const dateObject = new Date(date);
    return Math.ceil(Math.abs(currentDate.getTime() - dateObject.getTime()) / (1000 * 60 * 60 * 24)) > 365;
  };

  if (totalResults === 0) {
    return (
      <Styles.Container data-testid="SearchResultsList">
        <Styles.ResultInfo>No results found</Styles.ResultInfo>
      </Styles.Container>
    );
  } else {
    return (
      <Styles.Container data-testid="SearchResultsList">
        <Styles.ResultInfo>
          {pageNumber > 1 && 'Page ' + pageNumber + ' of '}
          {totalResults} total results for '{searchTerm}'
        </Styles.ResultInfo>

        {results.map((result, i) => (
          <Styles.Result key={i}>
            {result.service && <Styles.ServiceArea>{result.service}</Styles.ServiceArea>}
            <Styles.Title href={result.link}>{result.title}</Styles.Title>
            {result.published && result.service === 'News' && isOld(result.published) && <NewsArticleOldBanner />}
            <Styles.Summary>{result.summary}</Styles.Summary>
            {result.signpostLinksArray && themeContext.cardinal_name === 'north' && (
              <Styles.SignpostContainer>
                {result.signpostLinksArray.length > 1 ? (
                  <>
                    {result.TopLineText ? <p>{result.TopLineText}</p> : <p>Select your local area for information:</p>}
                  </>
                ) : (
                  <>{result.TopLineText ? <p>{result.TopLineText}</p> : <p>Go straight to the information:</p>}</>
                )}
                <SignpostLinksList signpostLinksArray={result.signpostLinksArray} />
              </Styles.SignpostContainer>
            )}
          </Styles.Result>
        ))}
      </Styles.Container>
    );
  }
};

export default SearchResultsList;
