import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import RemovableTag from './RemovableTag';
import { RemovableTagProps } from './RemovableTag.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/components/Removable Tag',
  component: RemovableTag,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<RemovableTagProps> = (args) => (
  <SBPadding>
    <RemovableTag {...args} />
  </SBPadding>
);

export const ExampleRemovableTag = Template.bind({});
ExampleRemovableTag.args = {
  label: 'Bins',
  value: 'bins',
};
