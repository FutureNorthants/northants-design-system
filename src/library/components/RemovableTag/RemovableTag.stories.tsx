import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RemovableTag from './RemovableTag';

const meta: Meta<typeof RemovableTag> = {
  title: 'Library/components/Removable Tag',
  component: RemovableTag,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof RemovableTag>;

export const ExampleRemovableTag: Story = {
  args: {
    label: 'Bins',
    value: 'bins',
  },
};
