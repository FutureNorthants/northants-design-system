
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SearchResultsList from "./SearchResultsList";
import { SearchResultsListProps } from "./SearchResultsList.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Search Results List',
  component: SearchResultsList
};

const Template: Story<SearchResultsListProps> = (args) => <SBPadding><SearchResultsList {...args} /></SBPadding>;

export const ExampleSearchResultsList = Template.bind({});    
ExampleSearchResultsList.args = {
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
};


export const ExampleNoSearchResultsList = Template.bind({});   
ExampleNoSearchResultsList.args = {
  searchTerm: "Council tax",
  results: []
}