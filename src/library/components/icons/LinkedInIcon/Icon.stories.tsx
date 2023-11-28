import React from 'react';
import { StoryFn } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from '../services/Icon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/LinkedIn',
  component: Icon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<IconProps> = (args) => (
  <SBPadding>
    <Icon {...args} />
  </SBPadding>
);

export const ExampleIcon = Template.bind({});
ExampleIcon.args = {
  colourFill: '#111',
};
