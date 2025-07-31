import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import LoadingSpinner from './LoadingSpinner';
import { LoadingSpinnerProps } from './LoadingSpinner.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Loading Spinner',
  component: LoadingSpinner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LoadingSpinnerProps> = (args) => (
  <SBPadding>
    <LoadingSpinner {...args} />
  </SBPadding>
);

export const ExampleLoadingSpinner = Template.bind({});
ExampleLoadingSpinner.args = {};
