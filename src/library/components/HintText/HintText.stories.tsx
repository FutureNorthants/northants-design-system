import React from 'react';
import HintText from './HintText';
import { HintTextProps } from './HintText.types';
import { StoryFn } from '@storybook/react-webpack5';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Forms - Hint text',
  component: HintText,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<HintTextProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <HintText {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  text: 'Example hint text',
};
