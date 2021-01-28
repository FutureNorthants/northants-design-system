import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import SearchResultsList from '../../structure/SearchResultsList/SearchResultsList';
import Searchbar from '../../structure/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';

export interface SearchResultsPageExampleProps {

}

const SearchResultsListData = {
  searchTerm: "Council tax",
  results: [
    {
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
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
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
      title: "Council tax",
      link: "/council-tax",
      summary: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
    },
    {
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
]
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
        <Searchbar isLight={true} isLarge={true} searchTerm="council tax" />

        {results ?
        <SearchResultsList results={SearchResultsListData.results} searchTerm={SearchResultsListData.searchTerm} />
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
