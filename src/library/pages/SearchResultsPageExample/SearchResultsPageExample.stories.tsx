import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

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

export const SearchResultsCludo: Story = {
  args: {
    results: true,
    cludoSearch: true,
    customerId: parseInt(process?.env?.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
    engineId: parseInt(process?.env?.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
  },
};
