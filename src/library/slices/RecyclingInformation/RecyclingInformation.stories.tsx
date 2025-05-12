import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RecyclingInformation from './RecyclingInformation';
import { RecyclingInformationProps } from './RecyclingInformation.types';

const meta: Meta<typeof RecyclingInformation> = {
  title: 'Library/Slices/RecyclingInformation',
  component: RecyclingInformation,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecyclingInformation>;

export const DefaultRecyclingInformation: Story = {
  render: (args) => <RecyclingInformation {...args} />,
};

export const AnotherRecyclingInformationExample: Story = {
  ...DefaultRecyclingInformation,
  args: {},
};
