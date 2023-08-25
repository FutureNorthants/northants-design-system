import React from 'react';
import { Story } from '@storybook/react/types-6-0';
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

const Template: Story<HeartIconProps> = (args) => (
  <SBPadding>
    <HeartIcon {...args} />
  </SBPadding>
);

export const ExampleHeartIcon = Template.bind({});
ExampleHeartIcon.args = {
  colourFill: '#111',
};
