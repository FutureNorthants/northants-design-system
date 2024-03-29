import React from 'react';
import { StoryFn } from '@storybook/react';
import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Pagination',
  component: Pagination,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PaginationProps> = (args) => (
  <SBPadding>
    <Pagination {...args} />
  </SBPadding>
);

const totalResults = 100;
const resultsPerPage = 10;
const numberOfNumbers = Math.ceil(totalResults / resultsPerPage);

export const ExamplePaginationFirstPage = Template.bind({});
ExamplePaginationFirstPage.args = {
  currentPage: 1,
  resultsPerPage: resultsPerPage,
  totalResults: totalResults,
};

export const ExamplePaginationMiddlePage = Template.bind({});
ExamplePaginationMiddlePage.args = {
  currentPage: Math.ceil(numberOfNumbers / 2),
  resultsPerPage: resultsPerPage,
  totalResults: totalResults,
};

export const ExamplePaginationLastPage = Template.bind({});
ExamplePaginationLastPage.args = {
  currentPage: 10,
  resultsPerPage: resultsPerPage,
  totalResults: totalResults,
};
