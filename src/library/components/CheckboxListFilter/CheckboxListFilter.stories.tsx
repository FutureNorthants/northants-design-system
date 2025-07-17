import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import CheckboxListFilter from './CheckboxListFilter';
import { CheckboxListFilterProps } from './CheckboxListFilter.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { articleOptions } from './CheckboxListFilterData';

import { newsArticleData, NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';

export default {
  title: 'Library/Components/Checkbox List Filter',
  component: CheckboxListFilter,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CheckboxListFilterProps> = (args) => (
  <SBPadding>
    <CheckboxListFilter {...args} />
  </SBPadding>
);

export const ExampleCheckboxListFilter = Template.bind({});
ExampleCheckboxListFilter.args = {
  options: articleOptions,
  checked: NewsArticleFilters.articleType,
  label: 'An example label',
  hint: 'Some example hint text',
  displayLegend: true,
};

export const ExampleCheckboxListFilterHiddenLabelHint = Template.bind({});
ExampleCheckboxListFilterHiddenLabelHint.args = {
  options: articleOptions,
  checked: NewsArticleFilters.articleType,
  hint: null,
  label: null,
};
