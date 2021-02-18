
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';


import Pagination from "../../components/Pagination/Pagination";
import SortBy from "../../components/SortBy/SortBy";
import NewsArticleList from "../../structure/NewsArticleList/NewsArticleList";

import newsArticleData from '../../structure/NewsArticleList/NewsArticleData';
import sortByOptions from './../../components/SortBy/SortByData';
import NewsArticleListHeader from "../../structure/NewsArticleListHeader/NewsArticleListHeader";
import Accordion from "../../slices/Accordion/Accordion";
import NewsArticleFilterAccordion from "../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordion";
import RemoveAllFilters from "../../components/RemoveAllFilters/RemoveAllFilters";
import CheckboxListFilter from "../../components/CheckboxListFilter/CheckboxListFilter";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";
import { articleOptions } from "./../../components/CheckboxListFilter/CheckboxListFilterData";
import { serviceOptions } from "./../../components/DropDownFilter/DropDownFilterData";

export interface NewsProps {
  hasResults: boolean,
  isFiltered: boolean
}


export const News: React.FC<NewsProps> = ({ hasResults, isFiltered }) =>  {

if(isFiltered) {
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
          <PageStructures.Searchbar id="news-search" isLight={true} searchTerm="council tax" submitInfo={[{
              postTo: "/news",
              params: {
                  type: "search",
                  searchTerm: "council tax"
              }
          }]} />
          </>,
          isExpanded: true
          },
          {
            title: "Services",
            content: <>
              <DropDownFilter options={serviceOptions} selected={0} />
            </>,
            isExpanded: true
            },
            {
            title: "Type of article",
            content: <>
              <CheckboxListFilter options={articleOptions} />
            </>,
            isExpanded: true
            }
          ]} />
        <RemoveAllFilters />
      </PageStructures.PageSidebar>
      <PageStructures.PageMain>
        {hasResults ?
          <>
            <NewsArticleListHeader sortByOptions={sortByOptions} sortBy={newsArticleData.sortBy} totalResults={newsArticleData.totalResults} />
            <NewsArticleList results={newsArticleData.results} />
            <Pagination currentPage={1} totalResults={15}  />
          </>
        :
          <NewsArticleList results={[]} />
        }
      </PageStructures.PageMain>
    </PageStructures.PageWithSidebarContainer>
  </PageStructures.MaxWidthContainer>
  <PageStructures.Footer />
</>

} else {
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
            <PageStructures.Searchbar id="news-search" isLight={true} submitInfo={[{
                postTo: "/news",
                params: {}
            }]} />
          </>,
          isExpanded: true
          },
          {
          title: "Services",
          content: <>
            <DropDownFilter options={serviceOptions} selected={0} />
          </>,
          isExpanded: true
          },
          {
          title: "Type of article",
          content: <>
            <CheckboxListFilter options={articleOptions} />
          </>,
          isExpanded: true
          }
          ]} />
        <RemoveAllFilters />
      </PageStructures.PageSidebar>
      <PageStructures.PageMain>
        {hasResults ?
          <>
            <NewsArticleListHeader sortByOptions={sortByOptions} sortBy={newsArticleData.sortBy} totalResults={newsArticleData.totalResults} />
            <NewsArticleList results={newsArticleData.results} />
            <Pagination currentPage={1} totalResults={15}  />
          </>
        :
          <NewsArticleList results={[]} />
        }
      </PageStructures.PageMain>
    </PageStructures.PageWithSidebarContainer>
  </PageStructures.MaxWidthContainer>
  <PageStructures.Footer />
</>
)}
      };