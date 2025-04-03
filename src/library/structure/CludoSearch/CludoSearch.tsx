import React from 'react';
import { CludoSearchProps } from './CludoSearch.types';
import * as Styles from './CludoSearch.styles';
import {
  CludoSearchAutocomplete,
  CludoSearchOptions,
  CludoWrapper,
  CustomResult,
  DidYouMean,
  FacetGroup,
  Pagination,
  ResultBadge,
  ResultCount,
  ResultDescription,
  ResultImage,
  ResultsList,
  ResultsPerPage,
  ResultTitle,
  ResultUrl,
  SearchInput,
  StandardFacet,
} from '@cludosearch/cludo-search-components';

const CludoSearch: React.FunctionComponent<CludoSearchProps> = ({ searchTerm, customerId, engineId }) => {
  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/',
    language: 'en',
    facets: {
      keys: ['Category'],
    },
    behavior: {
      enableRelatedSearches: true,
    },
    components: {
      autocomplete: CludoSearchAutocomplete,
    },
  };
  return (
    <Styles.Container data-testid="CludoSearch">
      <CludoWrapper config={cludoSearchConfig}>
        <SearchInput className="wnc-cludo-input" formId="search" ariaLabel="Search the website" />
        <ResultCount />
        <DidYouMean />

        <FacetGroup>
          <StandardFacet
            field="Category"
            hideClear
            hideCount
            hideSearchBar
            hideShowMore
            className="wnc-cludo-facet-list"
          />
        </FacetGroup>

        <ResultsList
          template={(currResult) => (
            <CustomResult result={currResult} wrapWithLink={true} className="wnc-cludo-result">
              <ResultTitle className="wnc-cludo-title" />
              <ResultImage />
              <ResultDescription maxWordCount={20} className="wnc-cludo-description" />
              <ResultBadge className="wnc-cludo-badge" />
              <ResultUrl className="wnc-cludo-result-link" />
            </CustomResult>
          )}
        />
        <Pagination className="wnc-cludo-pagination" />
      </CludoWrapper>
    </Styles.Container>
  );
};

export default CludoSearch;
