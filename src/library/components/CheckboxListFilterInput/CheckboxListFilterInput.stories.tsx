/*import { useState } from 'react'; */

import React from 'react';
import { StoryFn } from '@storybook/react';
import CheckboxListFilterInput from './CheckboxListFilterInput';
import { CheckboxListFilterInputProps } from './CheckboxListFilterInput.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/CheckboxListFilterInput',
  component: CheckboxListFilterInput,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CheckboxListFilterInputProps> = (args) => (
  <SBPadding>
    <CheckboxListFilterInput {...args} />
  </SBPadding>
);

export const TickedCheckboxListFilterInput = Template.bind({});
TickedCheckboxListFilterInput.args = {
  id: 'myCheckbox',
  name: 'myCheckbox',
  label: 'this is my label',
  title: 'this is my title!',
  hint: 'this is my hint!',
  value: true,
  setCheckboxState: () => {
    alert('Changed!');
  },
};

export const UnTickedCheckboxListFilterInput = Template.bind({});
UnTickedCheckboxListFilterInput.args = {
  id: 'myCheckbox',
  name: 'myCheckbox',
  label: 'this is my label',
  title: 'this is my title!',
  hint: 'this is my hint!',
  value: false,
  setCheckboxState: () => {
    alert('Changed!');
  },
};
