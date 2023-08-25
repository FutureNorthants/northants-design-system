import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import EmailIcon from './EmailIcon';
import { EmailIconProps } from './EmailIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Email',
  component: EmailIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<EmailIconProps> = (args) => (
  <SBPadding>
    <EmailIcon {...args} />
  </SBPadding>
);

export const ExampleEmailIcon = Template.bind({});
ExampleEmailIcon.args = {
  colourFill: '#333',
};
