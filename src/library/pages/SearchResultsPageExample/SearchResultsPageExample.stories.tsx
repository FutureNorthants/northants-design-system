import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchResultsPageExample, SearchResultsPageExampleProps } from './SearchResultsPageExample';
import { isExpressionWithTypeArguments } from 'typescript';

export default {
  title: 'Page Examples/Search Results Page Examples',
  component: SearchResultsPageExample,
} as Meta;

const Template: Story<SearchResultsPageExampleProps> = (args) => <SearchResultsPageExample {...args} />;


export const SearchResultsExample = Template.bind({});
SearchResultsExample.args = {
  results: true
}

export const SearchNoResultsExample = Template.bind({});
SearchNoResultsExample.args = {
  results: false
}
