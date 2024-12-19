import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchResultsPageExample } from './SearchResultsPageExample';

const meta: Meta<typeof SearchResultsPageExample> = {
  title: 'Page Examples/Search Results Page Examples',
  component: SearchResultsPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchResultsPageExample>;

export const SearchResultsExample: Story = {
  args: {
    results: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const SearchNoResultsExample: Story = {
  args: {
    results: false,
  },
  parameters: {
    pageLayout: 'page',
  },
};
