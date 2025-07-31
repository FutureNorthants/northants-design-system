import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Library/Components/Pagination',
  component: Pagination,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const totalResults = 100;
const resultsPerPage = 10;
const numberOfNumbers = Math.ceil(totalResults / resultsPerPage);

export const ExamplePaginationFirstPage: Story = {
  args: {
    currentPage: 1,
    resultsPerPage: resultsPerPage,
    totalResults: totalResults,
  },
};

export const ExamplePaginationMiddlePage: Story = {
  args: {
    currentPage: Math.ceil(numberOfNumbers / 2),
    resultsPerPage: resultsPerPage,
    totalResults: totalResults,
  },
};

export const ExamplePaginationLastPage: Story = {
  args: {
    currentPage: 10,
    resultsPerPage: resultsPerPage,
    totalResults: totalResults,
  },
};
