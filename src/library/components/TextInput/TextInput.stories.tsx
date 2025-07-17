import React from 'react';
import TextInput from './TextInput';
import { TextInputProps } from './TextInput.types';
import { StoryFn } from '@storybook/react-webpack5';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
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

const Template: StoryFn<TextInputProps> = (args) => (
  <SBPadding>
    <TextInput {...args} />
  </SBPadding>
);

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {};

export const LargeTextInputWithPlaceholder = Template.bind({});
LargeTextInputWithPlaceholder.args = {
  isLarge: true,
  placeholder: 'Enter some text here',
};
