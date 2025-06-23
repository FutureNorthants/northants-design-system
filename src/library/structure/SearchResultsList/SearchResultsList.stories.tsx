import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchResultsList from './SearchResultsList';
import { searchResults, noSearchResults, searchResultsWithServiceArea } from './SearchResultsData';

const meta: Meta<typeof SearchResultsList> = {
  title: 'Library/Structure/Search Results List',
  component: SearchResultsList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchResultsList>;

export const ExampleSearchResultsList: Story = {
  args: searchResults,
};

export const ExampleNoSearchResultsList: Story = {
  args: noSearchResults,
};

export const ExampleSearchResultsListWithServiceArea: Story = {
  args: searchResultsWithServiceArea,
};
