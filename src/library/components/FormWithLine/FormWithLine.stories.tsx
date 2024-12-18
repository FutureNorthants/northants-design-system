import React from 'react';
import FormWithLine from './FormWithLine';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof FormWithLine> = {
  title: 'Library/Components/Forms - Form container with line',
  component: FormWithLine,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormWithLine>;

export const Example: Story = {
  args: {},
  render: (args) => (
    <MaxWidthContainer>
      <FormWithLine {...args}>Test content</FormWithLine>
    </MaxWidthContainer>
  ),
};
