import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import SkipToMainContent from './SkipToMainContent';

const meta: Meta<typeof SkipToMainContent> = {
  title: 'Library/Structure/Skip to main content',
  component: SkipToMainContent,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleSkipToMainContent: Story = {};
