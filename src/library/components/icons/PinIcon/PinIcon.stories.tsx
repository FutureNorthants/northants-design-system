import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import PinIcon from './PinIcon';
import { PinIconProps } from './PinIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Pin',
  component: PinIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<PinIconProps> = (args) => (
  <SBPadding>
    <PinIcon {...args} />
  </SBPadding>
);

export const ExampleHeartIcon = Template.bind({});
ExampleHeartIcon.args = {
  colourFill: '#111',
};
