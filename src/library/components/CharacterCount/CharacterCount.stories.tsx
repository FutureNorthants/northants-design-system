import React from 'react';
import { StoryFn } from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';
import CharacterCount from './CharacterCount';
import { CharacterCountProps } from './CharacterCount.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

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

const Template: StoryFn<CharacterCountProps> = (args) => (
  <SBPadding>
    <CharacterCount {...args} />
  </SBPadding>
);

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
