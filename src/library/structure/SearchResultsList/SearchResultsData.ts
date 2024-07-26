import { SearchResultsListProps } from './SearchResultsList.types';

export const searchResults: SearchResultsListProps = {
  searchTerm: 'Council tax',
  pageNumber: 1,
  totalResults: 23,
  results: [
    {
      title: 'Council tax',
      link: '/council-tax',
      service: 'Council Tax',
      summary:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
      published: 'one year ago',
    },
    {
      title: 'Paying council tax',
      link: '/',
      service: 'Payments',
      summary: 'Pay your council tax online',
      signpostLinksArray: [
        {
          sovereignCode: 1,
          areaName: 'Corby',
          url: '/',
        },
        {
          sovereignCode: 3,
          areaName: 'East Northamptonshire',
          url: '/',
        },
        {
          sovereignCode: 4,
          areaName: 'Kettering',
          url: '/',
        },
        {
          sovereignCode: 7,
          areaName: 'Wellingborough',
          url: '/',
        },
      ],
    },
    {
      title: 'Council tax news article',
      link: '/news/council-tax-news-article',
      published: '2 years ago',
      service: 'News',
      summary: 'An example news article that shows when it was published.',
    },
    {
      title: 'Council tax single CTA',
      link: '/council-tax',
      summary:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
      signpostLinksArray: [
        {
          sovereignCode: 2,
          areaName: 'Northamptonshire County Council',
          url: '/',
        },
      ],
    },
    {
      title: 'Paying council tax',
      link: '/',
      summary: 'Pay your council tax online',
      TopLineText: 'Change to the topline text',
      signpostLinksArray: [
        {
          sovereignCode: 2,
          areaName: 'Daventry',
          url: '/',
        },
        {
          sovereignCode: 5,
          areaName: 'Northampton',
          url: '/',
        },
        {
          sovereignCode: 6,
          areaName: 'South Northamptonshire',
          url: '/',
        },
      ],
    },
  ],
};

export const noSearchResults: SearchResultsListProps = {
  searchTerm: 'Council tax',
  totalResults: 0,
  results: [],
};

export const searchResultsWithServiceArea: SearchResultsListProps = {
  searchTerm: 'Council tax',
  pageNumber: 2,
  totalResults: 23,
  results: [
    {
      service: 'Council tax',
      title: 'Council tax',
      link: '/council-tax',
      summary:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
    },
    {
      service: 'Council tax',
      title: 'Paying council tax',
      link: '/',
      summary: 'Pay your council tax online',
      signpostLinksArray: [
        {
          sovereignCode: 1,
          areaName: 'Corby',
          url: '/',
        },
        {
          sovereignCode: 3,
          areaName: 'East Northamptonshire',
          url: '/',
        },
        {
          sovereignCode: 4,
          areaName: 'Kettering',
          url: '/',
        },
        {
          sovereignCode: 7,
          areaName: 'Wellingborough',
          url: '/',
        },
      ],
    },
    {
      title: 'Council tax news article',
      link: '/news/council-tax-news-article',
      published: '2 years ago',
      service: 'News',
      summary: 'An example news article that shows when it was published.',
    },
    {
      service: 'Bins, recycling and waste',
      title: 'Council tax not same area',
      link: '/council-tax',
      summary:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
    },
    {
      title: 'Council tax without service area',
      link: '/council-tax',
      summary:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
    },
  ],
};
