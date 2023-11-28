import React from 'react';
import { StoryFn } from '@storybook/react';
import LinkIcon from './LinkIcon';
import { LinkIconProps } from './LinkIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Link',
  component: LinkIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LinkIconProps> = (args) => (
  <SBPadding>
    <LinkIcon {...args} />
  </SBPadding>
);

export const ExampleLinkIcon = Template.bind({});
ExampleLinkIcon.args = {
  colourFill: '#111',
};
