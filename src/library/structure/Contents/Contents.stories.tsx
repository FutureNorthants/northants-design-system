import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Contents from './Contents';
import { ContentsExampleData } from './Contents.storydata';

const meta: Meta<typeof Contents> = {
  title: 'Library/Structure/Contents',
  component: Contents,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Contents>;

export const ExampleContents: Story = {
  args: {
    currentPath: '/first-page',
    contents: ContentsExampleData,
  },
};

export const ExampleContentsWithSecondPageCurrent: Story = {
  args: {
    currentPath: '/second-page',
    contents: ContentsExampleData,
  },
};

export const ExampleContentsWithCustomTitle: Story = {
  args: {
    currentPath: '/first-page',
    contents: ContentsExampleData,
    title: 'Contents on this page',
  },
};
