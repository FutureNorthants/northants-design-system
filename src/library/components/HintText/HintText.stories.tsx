import React from 'react';
import HintText from './HintText';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof HintText> = {
  title: 'Library/Components/Forms - Hint text',
  component: HintText,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof HintText>;

export const Example: Story = {
  args: {
    text: 'Example hint text',
  },
  render: (args) => (
    <MaxWidthContainer>
      <HintText {...args} />
    </MaxWidthContainer>
  ),
};
