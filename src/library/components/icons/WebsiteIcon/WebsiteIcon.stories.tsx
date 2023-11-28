import React from 'react';
import { StoryFn } from '@storybook/react';
import WebsiteIcon from './WebsiteIcon';
import { WebsiteIconProps } from './WebsiteIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Website',
  component: WebsiteIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<WebsiteIconProps> = (args) => (
  <SBPadding>
    <WebsiteIcon {...args} />
  </SBPadding>
);

export const ExampleWebsiteIcon = Template.bind({});
ExampleWebsiteIcon.args = {
  colourFill: '#333',
};
