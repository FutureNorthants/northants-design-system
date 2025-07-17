import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
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

const Template: StoryFn<EmailIconProps> = (args) => (
  <SBPadding>
    <EmailIcon {...args} />
  </SBPadding>
);

export const ExampleEmailIcon = Template.bind({});
ExampleEmailIcon.args = {
  colourFill: '#333',
};
