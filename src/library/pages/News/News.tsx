
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';


import Pagination from "../../components/Pagination/Pagination";
import NewsArticleList from "../../structure/NewsArticleList/NewsArticleList";


import sortByOptions from './../../components/SortBy/SortByData';
import NewsArticleListHeader from "../../structure/NewsArticleListHeader/NewsArticleListHeader";
import NewsArticleFilterAccordion from "../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordion";
import CheckboxListFilter from "../../components/CheckboxListFilter/CheckboxListFilter";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";
import { newsArticleData, newsArticleDataFiltered } from './../../structure/NewsArticleList/NewsArticleData';
import { articleOptions } from "./../../components/CheckboxListFilter/CheckboxListFilterData";
import { serviceOptions } from "./../../components/DropDownFilter/DropDownFilterData";
import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"

export interface NewsProps {
  hasResults: boolean
}


export const News: React.FC<NewsProps> = ({ hasResults }) =>  {
return (
<>
  <PageStructures.Header />
  
  <PageStructures.MaxWidthContainer noPadding={true}>
    <PageStructures.Breadcrumbs 
    breadcrumbsArray={[
    {
      title: "Home",
      url: "/"
    }
    ]}
    />

    <PageStructures.PageTitle>
      <Heading level={1} text="News" />
    </PageStructures.PageTitle>
    <PageStructures.PageWithSidebarContainer sidebarLeft={true}>
      <PageStructures.PageSidebar>
        <NewsArticleFilterAccordion sections={[
          {
          title: NewsArticleFilterFields.search.title,
          content: 
          <>
            <PageStructures.Searchbar id="news-search" searchTerm={(newsArticleData.searchTerm) ? newsArticleData.searchTerm : undefined} isLight={true} submitInfo={[{
                postTo: "/news",
                params: {
                  type: "search",
                  searchTerm: (newsArticleData.searchTerm) ? newsArticleData.searchTerm : undefined
                }
            }]} />
          </>,
          isExpanded: true
          },
          {
          title: NewsArticleFilterFields.services.title,
          content: <>
            <DropDownFilter label={null} id="services-options" options={serviceOptions} selected={newsArticleData.services} />
          </>,
          isExpanded: true
          },
          {
          title: NewsArticleFilterFields.articleType.title,
          content: <>
            <CheckboxListFilter label="Type of article" hint={null} options={articleOptions} checked={newsArticleData.articleType} displayLegend={false}/>
          </>,
          isExpanded: true
          }
          ]} />
      </PageStructures.PageSidebar>
      <PageStructures.PageMain>
        {hasResults ?
          <>
            <NewsArticleListHeader sortByOptions={sortByOptions} sortBy={newsArticleData.sortBy} totalResults={newsArticleData.totalResults} />
            <NewsArticleList results={newsArticleData.results} />
            <Pagination currentPage={1} totalResults={15} postTo="news" />
          </>
        :
        <>
          <NewsArticleListHeader sortByOptions={sortByOptions} sortBy={newsArticleData.sortBy} totalResults={0} />
          <NewsArticleList results={[]} />
        </>
        }
      </PageStructures.PageMain>
    </PageStructures.PageWithSidebarContainer>
  </PageStructures.MaxWidthContainer>
  <PageStructures.Footer />
</>
)
};