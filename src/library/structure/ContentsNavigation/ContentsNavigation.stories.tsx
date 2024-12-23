import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentsNavigation from './ContentsNavigation';
import { ContentsExampleData } from '../Contents/Contents.storydata';

const meta: Meta<typeof ContentsNavigation> = {
  title: 'Library/Structure/Contents Navigation',
  component: ContentsNavigation,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsNavigation>;

export const ExampleContentsNavigation: Story = {
  args: {
    contents: ContentsExampleData,
    currentPath: '/second-page',
  },
};

export const ExampleContentsNavigationFirstPage: Story = {
  args: {
    contents: ContentsExampleData,
    currentPath: '/first-page',
  },
};

export const ExampleContentsNavigationLastPage: Story = {
  args: {
    contents: ContentsExampleData,
    currentPath: '/fourth-page',
  },
};
