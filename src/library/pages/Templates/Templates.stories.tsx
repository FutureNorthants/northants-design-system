import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Templates, TemplatesProps } from './Templates';

const meta: Meta<typeof Templates> = {
  title: 'Page Examples/Templates',
  component: Templates,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Templates>;

export const SingleColTemplate: Story = {
  args: { type: 'singleCol' },
  parameters: {
    pageLayout: 'page',
  },
};

export const TwoColTemplate: Story = {
  args: { type: 'twoCol' },
  parameters: {
    pageLayout: 'page',
  },
};

export const TwoColLeftTemplate: Story = {
  args: { type: 'twoColLeft' },
  parameters: {
    pageLayout: 'page',
  },
};

export const TwoColLeftWithHeaderTemplate: Story = {
  args: { type: 'twoColLeftHeader' },
  parameters: {
    pageLayout: 'page',
  },
};
