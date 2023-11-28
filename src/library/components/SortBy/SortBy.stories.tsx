import React from 'react';
import { StoryFn } from '@storybook/react';
import SortBy from './SortBy';
import { SortByProps } from './SortBy.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import sortByOptions from './SortByData';

export default {
  title: 'Library/Components/Sort by',
  component: SortBy,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SortByProps> = (args) => (
  <SBPadding>
    <SortBy {...args} />
  </SBPadding>
);

export const ExampleSortBy = Template.bind({});
ExampleSortBy.args = {
  selected: 'recentDesc',
  options: sortByOptions,
};
