import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import PhoneIcon from './PhoneIcon';
import { PhoneIconProps } from './PhoneIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Phone',
  component: PhoneIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<PhoneIconProps> = (args) => (
  <SBPadding>
    <PhoneIcon {...args} />
  </SBPadding>
);

export const ExamplePhoneIcon = Template.bind({});
ExamplePhoneIcon.args = {
  colourFill: '#333',
};
