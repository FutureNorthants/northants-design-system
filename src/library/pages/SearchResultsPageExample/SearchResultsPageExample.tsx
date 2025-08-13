import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import SearchResultsList from '../../structure/SearchResultsList/SearchResultsList';
import Pagination from '../../components/Pagination/Pagination';
import { SignpostLinkProp } from '../../components/SignpostLinksList/SignpostLinksList.types';
import { noSearchResults, searchResultsWithServiceArea } from './../../structure/SearchResultsList/SearchResultsData';
import ToggleButtons from '../../components/ToggleButtons/ToggleButtons';

export interface SearchResultsPageExampleProps {
  results: boolean;
  cludoSearch?: boolean;
  customerId?: number;
  engineId?: number;
  includePhaseBanner?: boolean;
}
interface SearchResultProps {
  /**
   * Search result title
   */
  title: string;
  /**
   * Link to page
   */
  link: string;
  /**
   * Summary of page
   */
  summary: string;
  /**
   * If it contains signposting links include them here
   */
  signpostLinksArray?: Array<SignpostLinkProp>;
  /**
   * If there is a service area tied to the result
   */
  service: string;
}

export const SearchResultsPageExample: React.FC<SearchResultsPageExampleProps> = ({
  results,
  cludoSearch = false,
  customerId,
  engineId,
  includePhaseBanner = true,
}) => (
  <>
    <PageStructures.Header hideSearchBar hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />
    <PageStructures.MaxWidthContainer>
      <PageStructures.Breadcrumbs
        breadcrumbsArray={[
          {
            title: 'Home',
            url: '/',
          },
        ]}
      />
      {includePhaseBanner && (
        <PageStructures.PhaseBanner phaseTitle="Beta">
          <p>
            You are using our new search experience. We are still refining how this works so you may notice some
            changes. To help us improve it,&nbsp;
            <a href="https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search">
              we would love your feedback
            </a>
          </p>
        </PageStructures.PhaseBanner>
      )}
      <PageStructures.PageMain>
        <Heading level={1} text="Search results" />
        {cludoSearch && customerId && engineId ? (
          <PageStructures.CludoSearch customerId={customerId} engineId={engineId} />
        ) : (
          <>
            <PageStructures.Searchbar
              isLight={true}
              isLarge={true}
              searchTerm="council tax"
              submitInfo={{
                postTo: '/search',
                params: {
                  type: 'search',
                  searchTerm: 'council tax',
                },
              }}
            />

            <ToggleButtons
              buttons={[
                {
                  label: 'Service results',
                  ariaLabel: 'View the service results',
                  onClick: () => {},
                },
                {
                  label: 'News results',
                  ariaLabel: 'View the news results',
                  onClick: () => {},
                },
              ]}
              defaultButton={0}
              hasTopMargin
            />

            {results ? (
              <SearchResultsList {...searchResultsWithServiceArea} />
            ) : (
              <SearchResultsList {...noSearchResults} />
            )}

            {results && (
              <Pagination
                currentPage={searchResultsWithServiceArea.pageNumber}
                totalResults={searchResultsWithServiceArea.totalResults}
              />
            )}
          </>
        )}
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer />
  </>
);
