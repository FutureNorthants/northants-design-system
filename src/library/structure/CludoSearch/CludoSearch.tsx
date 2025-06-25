import React from 'react';
import { CludoSearchProps } from './CludoSearch.types';
import * as Styles from './CludoSearch.styles';
import {
  ClearAllFacets,
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
  useSearchResults,
} from '@cludosearch/cludo-search-components/ssr';
import CludoAutoComplete from './CludoAutocomplete';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const CludoSearch: React.FunctionComponent<CludoSearchProps> = ({ searchTerm, customerId, engineId }) => {
  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/',
    language: 'en',
    facets: {
      keys: ['Category'],
      defaultValues: {
        Category: ['West Northamptonshire Council'],
      },
    },
    behavior: {
      enableRelatedSearches: true,
    },
    instanceId: '',
    components: {
      autocomplete: CludoAutoComplete,
    },
  };

  const filterOrder: string[] = [
    'West Northamptonshire Council',
    'News',
    'Local Organisations',
    'SEND Local Offer',
    "Northamptonshire Children's Trust",
    '*',
  ];

  const [searchResultsState, searchResultsDispatchers] = useSearchResults();

  return (
    <Styles.Container data-testid="CludoSearch">
      <CludoWrapper config={cludoSearchConfig}>
        <CludoAutoComplete />
        <ResultCount />
        <DidYouMean className="wnc-cludo-did-you-mean" />

        <Row>
          <Column small="full" medium="two-thirds" large="three-quarters">
            <Styles.MobileFacets>
              <FacetGroup>
                <StandardFacet
                  field="Category"
                  label="Show results from"
                  hideClear={false}
                  hideCount={false}
                  hideSearchBar
                  hideShowMore
                  className="wnc-cludo-facet-list"
                  exclude={['Documents']}
                  order={filterOrder}
                />
              </FacetGroup>
              <ClearAllFacets disableTheme={true} label="All services" className="wnc-cludo-clear-facets" />
            </Styles.MobileFacets>
            <ResultsList
              template={(currResult) => (
                <CustomResult result={currResult} wrapWithLink={true} className="wnc-cludo-result">
                  <Row>
                    <Column small="full" medium="one-third" large="one-quarter">
                      <Styles.ImageContainer>
                        <ResultImage className="wnc-cludo-image" />
                      </Styles.ImageContainer>
                    </Column>
                    <Column small="full" medium="two-thirds" large="three-quarters">
                      <ResultTitle className="wnc-cludo-title" />
                      <ResultDescription maxWordCount={20} className="wnc-cludo-description" />
                      <ResultBadge className="wnc-cludo-badge" />
                      <ResultUrl className="wnc-cludo-result-link" />
                    </Column>
                  </Row>
                </CustomResult>
              )}
            />
            <Pagination className="wnc-cludo-pagination" previousButtonIcon="Previous" nextButtonIcon="Next" />
          </Column>
          <Column small="full" medium="one-third" large="one-quarter">
            <Styles.DesktopFacets>
              <FacetGroup>
                <StandardFacet
                  field="Category"
                  label="Show results from"
                  hideClear={false}
                  hideCount={false}
                  hideSearchBar
                  hideShowMore
                  className="wnc-cludo-facet-list"
                  exclude={['Documents']}
                  order={filterOrder}
                />
              </FacetGroup>
              <ClearAllFacets disableTheme={true} label="All services" className="wnc-cludo-clear-facets" />
            </Styles.DesktopFacets>
          </Column>
        </Row>
      </CludoWrapper>
    </Styles.Container>
  );
};

export default CludoSearch;
