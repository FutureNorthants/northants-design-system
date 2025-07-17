import React from 'react';
// also exported from '@storybook/react-webpack5' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { SearchResultsPageExample, SearchResultsPageExampleProps } from './SearchResultsPageExample';
import { isExpressionWithTypeArguments } from 'typescript';

export default {
  title: 'Page Examples/Search Results Page Examples',
  component: SearchResultsPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<SearchResultsPageExampleProps> = (args) => <SearchResultsPageExample {...args} />;

export const SearchResultsExample = Template.bind({});
SearchResultsExample.args = {
  results: true,
};

export const SearchNoResultsExample = Template.bind({});
SearchNoResultsExample.args = {
  results: false,
};

export const SearchResultsCludo = Template.bind({});
SearchResultsCludo.args = {
  results: true,
  cludoSearch: true,
  customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
  engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
};
