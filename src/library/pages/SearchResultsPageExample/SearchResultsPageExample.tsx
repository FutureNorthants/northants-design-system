import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import SearchResultsList from '../../structure/SearchResultsList/SearchResultsList';
import Searchbar from '../../structure/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';
import {SignpostLinkProp} from '../../components/SignpostLinksList/SignpostLinksList.types'

export interface SearchResultsPageExampleProps {
  results: Array<SearchResultProps>
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


const SearchResultsListData = {
  searchTerm: "Council tax",
  results: [
    {
      service: "Council tax",
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
      service: "Council tax",
      title: "Paying council tax",
      link: "/",
      summary: "Pay your council tax online",
      signpostLinksArray: [
        {
          sovereignCode: 1,
          areaName: "Corby",
          url: "/"
      },
      {
          sovereignCode: 3,
          areaName: "East Northamptonshire",
          url: "/"
      },
      {
          sovereignCode: 4,
          areaName: "Kettering",
          url: "/"
      },
      {
          sovereignCode: 7,
          areaName: "Wellingborough",
          url: "/"
      }
    ]
    },
    {
      service: "Council tax",
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
      service: "Council tax",
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
      service: "Council tax",
      title: "Paying council tax",
      link: "/",
      summary: "Pay your council tax online",
      signpostLinksArray: [
        {
          sovereignCode: 2,
          areaName: "Daventry",
          url: "/"
      },
      {
          sovereignCode: 5,
          areaName: "Northampton",
          url: "/"
      },
      {
          sovereignCode: 6,
          areaName: "South Northamptonshire",
          url: "/"
      }
    ]
    },
],
pageNumber: 0
}

export const SearchResultsPageExample: React.FC<SearchResultsPageExampleProps> = ({ results }) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
    <PageStructures.Breadcrumbs 
      breadcrumbsArray={[
      {
          title: "Home",
          url: "/"
      }
      ]}
    />
      <PageStructures.PageMain>
        <Heading level={1} text="Search results" />
        <Searchbar isLight={true} isLarge={true} searchTerm="council tax" submitInfo={[{
            postTo: "/search",
            params: {
                type: "search",
                searchTerm: "council tax"
            }
        }]} />

        {results ?
        <SearchResultsList results={SearchResultsListData.results} searchTerm={SearchResultsListData.searchTerm} pageNumber={SearchResultsListData.pageNumber} />
        :
        <SearchResultsList results={[]} searchTerm={SearchResultsListData.searchTerm} />
        }


        {results &&
          <Pagination currentPage={1} totalResults={5}  />
        }


      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer />
  </>
);
