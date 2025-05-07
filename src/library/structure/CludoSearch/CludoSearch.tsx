import React, { useEffect, useState } from 'react';
import { CludoSearchProps } from './CludoSearch.types';
import * as Styles from './CludoSearch.styles';
import {
  autocompleteHandleInputBlur,
  autocompleteHandleInputChange,
  autocompleteHandleInputKeyDown,
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
  SaytSuggestion,
  SearchInput,
  StandardFacet,
  useAutocomplete,
} from '@cludosearch/cludo-search-components/ssr';
import Input from '../../components/Input/Input';
import CludoAutoComplete from './CludoAutocomplete';

const CludoSearch: React.FunctionComponent<CludoSearchProps> = ({ searchTerm, customerId, engineId }) => {
  const [notServer, setNotServer] = useState<boolean>(false);
  const [autocompleteState, autocompleteDispatchers] = useAutocomplete();

  useEffect(() => {
    setNotServer(true);
  }, []);

  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/',
    language: 'en',
    facets: {
      keys: ['Category'],
    },
    components: {
      // results: CludoResultsTemplate,
      // controls: CludoControlsTemplate,
      autocomplete: CludoAutoComplete,
    },
  };

  const autocompleteContainerCSS =
    'cludo-bg-color-white cludo-list-style-none cludo-border-1-neutral cludo-border-radius-card cludo-box-shadow-card cludo-p-4 cludo-mt-1 cludo-max-h-96 cludo-overflow-y-auto';

  return (
    <Styles.Container data-testid="CludoSearch">
      {notServer && (
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
      )}
    </Styles.Container>
  );
};

export default CludoSearch;
