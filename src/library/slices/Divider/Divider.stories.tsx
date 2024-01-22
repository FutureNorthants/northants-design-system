import React from 'react';
import { StoryFn } from '@storybook/react';
import Divider from './Divider';
import { DividerProps } from './Divider.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/Divider',
  component: Divider,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DividerProps> = (args) => (
  <SBPadding>
    <Divider {...args} />
  </SBPadding>
);

export const ExampleDivider = Template.bind({});
