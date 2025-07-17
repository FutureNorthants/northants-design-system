import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import SearchIcon from './SearchIcon';
import { SearchIconProps } from './SearchIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Search',
  component: SearchIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SearchIconProps> = (args) => (
  <SBPadding>
    <SearchIcon {...args} />
  </SBPadding>
);

export const ExampleSearchIcon = Template.bind({});
ExampleSearchIcon.args = {
  colourFill: '#111',
};
