
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
import { newsArticleData } from './../../structure/NewsArticleList/NewsArticleData';
import { articleOptions } from "./../../components/CheckboxListFilter/CheckboxListFilterData";
import { serviceOptions } from "./../../components/DropDownFilter/DropDownFilterData";

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
  </PageStructures.MaxWidthContainer>

  <PageStructures.MaxWidthContainer>
    <PageStructures.PageWithSidebarContainer sidebarLeft={true}>
      <PageStructures.PageSidebar>
        <NewsArticleFilterAccordion sections={[
          {
          title: "Search articles",
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
          title: "Services",
          content: <>
            <PageStructures.DropDownFilter label={null} options={serviceOptions} selected={newsArticleData.services} />
          </>,
          isExpanded: true
          },
          {
          title: "Type of article",
          content: <>
            <PageStructures.CheckboxListFilter label={null} hint={null} options={articleOptions} checked={newsArticleData.articleType} />
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
          <NewsArticleList results={[]} />
        }
      </PageStructures.PageMain>
    </PageStructures.PageWithSidebarContainer>
  </PageStructures.MaxWidthContainer>
  <PageStructures.Footer />
</>
)};