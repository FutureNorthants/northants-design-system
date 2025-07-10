import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CharacterCount from './CharacterCount';

const meta: Meta<typeof CharacterCount> = {
  title: 'Library/Components/Character Count',
  component: CharacterCount,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const ExampleCharacterCount: Story = {
  args: {
    maxLength: 150,
    input: 'This is a test message',
  },
};

export const ExampleCharacterCountTooLong: Story = {
  ...ExampleCharacterCount,
  args: {
    maxLength: 20,
    input: 'This is a test message that is too long for the max length.',
  },
};
