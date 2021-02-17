
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import Button from "../../components/Button/Button";
import NewsArticleDate from "../../structure/NewsArticleDate/NewsArticleDate";
import NewsArticleImage from "../../structure/NewsArticleImage/NewsArticleImage";
import NewsArticleOldBanner from "../../structure/NewsArticleOldBanner/NewsArticleOldBanner";
import Pagination from "../../components/Pagination/Pagination";
import NewsArticleList from "../../structure/NewsArticleList/NewsArticleList";

import newsArticleData from './../../structure/NewsArticleList/NewsArticleData';


export interface NewsProps {
  results: boolean
}


export const News: React.FC<NewsProps> = ({ results }) => (
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

            Search articles
            <br />
            Services
            <br />
            Type of article

            remove all filters
             
          </PageStructures.PageSidebar>

            <PageStructures.PageMain>
              
            {/* <NewsList  /> */}

            {results ?
        <NewsArticleList results={newsArticleData} />
        :
        <NewsArticleList results={[]} />
        }

            
        {results &&
          <Pagination currentPage={1} totalResults={15}  />
        }



            </PageStructures.PageMain>
            
            </PageStructures.PageWithSidebarContainer>
          </PageStructures.MaxWidthContainer>

          <PageStructures.Footer />
  </>
);