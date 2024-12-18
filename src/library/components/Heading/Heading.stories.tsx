import React from 'react';
import Heading from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Library/Components/Heading',
  component: Heading,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    text: 'Heading 1',
  },
};

export const H2: Story = {
  ...H1,
  args: {
    level: 2,
    text: 'Heading 2',
  },
};

export const H3: Story = {
  ...H1,
  args: {
    level: 3,
    text: 'Heading 3',
  },
};

export const H4: Story = {
  ...H1,
  args: {
    level: 4,
    text: 'Heading 4',
  },
};
