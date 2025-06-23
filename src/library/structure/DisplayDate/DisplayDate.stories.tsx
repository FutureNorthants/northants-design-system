import React from 'react';
import DisplayDate from './DisplayDate';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof DisplayDate> = {
  title: 'Library/Structure/Display Date',
  component: DisplayDate,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DisplayDate>;

export const Example: Story = {
  args: {
    preText: 'Before:',
    postText: ':After',
    text: '1614178638',
    format: 'X',
  },
  render: (args) => (
    <MaxWidthContainer>
      <DisplayDate {...args} />
    </MaxWidthContainer>
  ),
};
