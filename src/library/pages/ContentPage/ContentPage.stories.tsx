import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentPage } from './ContentPage';

const meta: Meta<typeof ContentPage> = {
  title: 'Page Examples/Content Page',
  component: ContentPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentPage>;

export const ExampleContentPage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
