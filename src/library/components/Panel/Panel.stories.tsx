import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Panel from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Library/Components/Panel',
  component: Panel,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const ExamplePanel: Story = {
  args: {
    heading: 'Application complete',
    children: <p>Your reference number is ABC123.</p>,
  },
};
