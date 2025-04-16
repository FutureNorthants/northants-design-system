import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropDownFilter from './DropDownFilter';
import { serviceOptions } from './DropDownFilterData';
import { NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';

const meta: Meta<typeof DropDownFilter> = {
  title: 'Library/Components/Drop Down Filter',
  component: DropDownFilter,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropDownFilter>;

export const ExampleDropDownFilter: Story = {
  args: {
    options: serviceOptions,
    selected: NewsArticleFilters.services,
  },
};

export const ExampleDropDownFilterHideLabel: Story = {
  ...ExampleDropDownFilter,
  args: {
    hideLabel: true,
    label: 'News Articles',
    options: serviceOptions,
    selected: NewsArticleFilters.services,
  },
};
