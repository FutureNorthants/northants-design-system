import React from 'react';
import DisplayDate from './DisplayDate';
import { DisplayDateProps } from './DisplayDate.types';
import { StoryFn } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Display Date',
  component: DisplayDate,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DisplayDateProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <DisplayDate {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  preText: 'Before:',
  postText: ':After',
  text: 1614178638,
  format: 'X',
};
