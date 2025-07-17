import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import CharacterCount from './CharacterCount';
import { CharacterCountProps } from './CharacterCount.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Character Count',
  component: CharacterCount,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CharacterCountProps> = (args) => (
  <SBPadding>
    <CharacterCount {...args} />
  </SBPadding>
);

export const ExampleCharacterCount = Template.bind({});
ExampleCharacterCount.args = {
  maxLength: 150,
  input: 'This is a test message',
};

export const ExampleCharacterCountTooLong = Template.bind({});
ExampleCharacterCountTooLong.args = {
  maxLength: 20,
  input: 'This is a test message that is too long for the max length.',
};
