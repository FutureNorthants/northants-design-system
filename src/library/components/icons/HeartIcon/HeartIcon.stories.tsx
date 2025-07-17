import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import HeartIcon from './HeartIcon';
import { HeartIconProps } from './HeartIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Heart',
  component: HeartIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<HeartIconProps> = (args) => (
  <SBPadding>
    <HeartIcon {...args} />
  </SBPadding>
);

export const ExampleHeartIcon = Template.bind({});
ExampleHeartIcon.args = {
  colourFill: '#111',
};
