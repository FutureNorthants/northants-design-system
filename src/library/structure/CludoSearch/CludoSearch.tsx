import React, { useEffect, useState } from 'react';
import { CludoSearchProps } from './CludoSearch.types';
import * as Styles from './CludoSearch.styles';
import {
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
  ResultTitle,
  ResultUrl,
  StandardFacet,
} from '@cludosearch/cludo-search-components/ssr';
import CludoAutoComplete from './CludoAutocomplete';

const CludoSearch: React.FunctionComponent<CludoSearchProps> = ({ searchTerm, customerId, engineId }) => {
  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/',
    language: 'en',
    facets: {
      keys: ['Category'],
    },
    instanceId: '',
    components: {
      autocomplete: CludoAutoComplete,
    },
  };

  return (
    <Styles.Container data-testid="CludoSearch">
      <CludoWrapper config={cludoSearchConfig}>
        <CludoAutoComplete />
        <ResultCount />
        <DidYouMean className="wnc-cludo-did-you-mean" />

        <FacetGroup>
          <StandardFacet
            field="Category"
            hideClear
            hideCount={false}
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
