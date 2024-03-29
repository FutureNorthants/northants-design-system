import React from 'react';
import { StoryFn } from '@storybook/react';
import SkipToMainContent from './SkipToMainContent';
import { SkipToMainContentProps } from './SkipToMainContent.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Skip to main content',
  component: SkipToMainContent,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SkipToMainContentProps> = (args) => (
  <SBPadding>
    <SkipToMainContent {...args} />
  </SBPadding>
);

export const ExampleSkipToMainContent = Template.bind({});
