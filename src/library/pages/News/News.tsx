import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import Pagination from '../../components/Pagination/Pagination';
import NewsArticleList from '../../structure/NewsArticleList/NewsArticleList';
import sortByOptions from './../../components/SortBy/SortByData';
import NewsArticleListHeader from '../../structure/NewsArticleListHeader/NewsArticleListHeader';
import NewsArticleFilterAccordion from '../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordion';
import CheckboxListFilter from '../../components/CheckboxListFilter/CheckboxListFilter';
import DropDownFilter from '../../components/DropDownFilter/DropDownFilter';
import { newsArticleData, NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';
import { articleOptions } from './../../components/CheckboxListFilter/CheckboxListFilterData';
import { serviceOptions } from './../../components/DropDownFilter/DropDownFilterData';
import { NewsArticleFilterFields } from './../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText';
import { handleParams } from './../../helpers/url-helpers';

export interface NewsProps {
  hasResults: boolean;
}

export const News: React.FunctionComponent<NewsProps> = ({ hasResults }) => {
  const handleChange = (checkedValues: string) => {
    handleParams('news', [{ key: NewsArticleFilterFields.articleType.queryParamKey, value: checkedValues }], ['page']);
  };
  return (
    <>
      <PageStructures.Header hasDirectoryLink hasNewsLink accessibilityLink="/" hasTranslate />

      <PageStructures.MaxWidthContainer noPadding={true}>
        <PageStructures.Breadcrumbs
          breadcrumbsArray={[
            {
              title: 'Home',
              url: '/',
            },
          ]}
        />

        <PageStructures.PageTitle>
          <Heading level={1} text="News" />
        </PageStructures.PageTitle>
        <PageStructures.PageWithSidebarContainer sidebarLeft={true}>
          <PageStructures.PageSidebar>
            <NewsArticleFilterAccordion
              sections={[
                {
                  title: NewsArticleFilterFields.search.title,
                  content: (
                    <>
                      <PageStructures.Searchbar
                        id="news-search"
                        searchTerm={NewsArticleFilters.searchTerm ? NewsArticleFilters.searchTerm : undefined}
                        isLight={true}
                        submitInfo={{
                          postTo: '/news',
                          params: {
                            type: 'search',
                            searchTerm: NewsArticleFilters.searchTerm ? NewsArticleFilters.searchTerm : undefined,
                          },
                        }}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
                {
                  title: NewsArticleFilterFields.services.title,
                  content: (
                    <>
                      <DropDownFilter
                        label={null}
                        id="services-options"
                        options={serviceOptions}
                        selected={NewsArticleFilters.services}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
                {
                  title: NewsArticleFilterFields.articleType.title,
                  content: (
                    <>
                      <CheckboxListFilter
                        label="Type of article"
                        hint={null}
                        options={articleOptions}
                        checked={NewsArticleFilters.articleType}
                        displayLegend={false}
                        onChange={handleChange}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
              ]}
            />
          </PageStructures.PageSidebar>
          <PageStructures.PageMain>
            {hasResults ? (
              <>
                <NewsArticleListHeader
                  sortByOptions={sortByOptions}
                  sortBy={newsArticleData.sortBy}
                  totalResults={newsArticleData.totalResults}
                />
                <NewsArticleList results={newsArticleData.results} />
                <Pagination currentPage={1} totalResults={15} postTo="news" />
              </>
            ) : (
              <>
                <NewsArticleListHeader sortByOptions={sortByOptions} sortBy={newsArticleData.sortBy} totalResults={0} />
                <NewsArticleList results={[]} />
              </>
            )}
          </PageStructures.PageMain>
        </PageStructures.PageWithSidebarContainer>
      </PageStructures.MaxWidthContainer>
      <PageStructures.Footer />
    </>
  );
};
