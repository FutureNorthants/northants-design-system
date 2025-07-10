import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckboxListFilter from './CheckboxListFilter';
import { articleOptions } from './CheckboxListFilterData';
import { newsArticleData, NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';

const meta: Meta<typeof CheckboxListFilter> = {
  title: 'Library/Components/Checkbox List Filter',
  component: CheckboxListFilter,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxListFilter>;

export const ExampleCheckboxListFilter: Story = {
  args: {
    options: articleOptions,
    checked: NewsArticleFilters.articleType,
    label: 'An example label',
    hint: 'Some example hint text',
    displayLegend: true,
  },
};

export const ExampleCheckboxListFilterHiddenLabelHint: Story = {
  ...ExampleCheckboxListFilter,
  args: {
    options: articleOptions,
    checked: NewsArticleFilters.articleType,
    hint: null,
    label: null,
  },
};
