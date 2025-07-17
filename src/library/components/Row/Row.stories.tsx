import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Row from './Row';

const meta: Meta<typeof Row> = {
  title: 'Library/Components/Row',
  component: Row,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const ExampleRow: Story = {
  render: (args) => <Row {...args}>Some content</Row>,
};

export const ExampleRowList: Story = {
  ...ExampleRow,
  args: {
    isList: true,
  },
};
