import React from 'react';
import TextInput from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Library/Components/TextInput',
  component: TextInput,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    id: {
      table: { category: 'Component' },
    },
    name: {
      table: { category: 'Input control' },
    },
    value: {
      table: { category: 'Input control' },
    },
    size: {
      control: {
        type: 'number',
        min: 1,
        max: 200,
        step: 1,
      },
      table: { category: 'Input control' },
    },
    placeholder: {
      table: { category: 'Input control' },
    },
    isLarge: {
      table: { category: 'Input control' },
    },
    isErrored: {
      table: { category: 'Error status' },
    },
    errorText: {
      table: { category: 'Error status' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const DefaultTextInput: Story = {};

export const LargeTextInputWithPlaceholder: Story = {
  args: {
    isLarge: true,
    placeholder: 'Enter some text here',
  },
};
