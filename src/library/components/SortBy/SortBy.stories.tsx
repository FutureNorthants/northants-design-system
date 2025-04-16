import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SortBy from './SortBy';
import sortByOptions from './SortByData';

const meta: Meta<typeof SortBy> = {
  title: 'Library/Components/Sort by',
  component: SortBy,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SortBy>;

export const ExampleSortBy: Story = {
  args: {
    selected: 'recentDesc',
    options: sortByOptions,
  },
};
