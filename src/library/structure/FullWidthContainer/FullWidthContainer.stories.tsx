import React from 'react';
import FullWidthContainer from './FullWidthContainer';
import { FullWidthContainerProps } from './FullWidthContainer.types';
import { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Library/structure/Full width Container',
  component: FullWidthContainer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<FullWidthContainerProps> = (args) => (
  <FullWidthContainer {...args}>Children of the page container go here</FullWidthContainer>
);

export const FullWidthContainerExample = Template.bind({});
FullWidthContainerExample.args = {
  hasBackground: true,
  hasPadding: true,
};

export const FullWidthContainerWithoutPadding = Template.bind({});
FullWidthContainerWithoutPadding.args = {
  hasBackground: true,
  hasPadding: false,
};

export const FullWidthContainerWithoutBackground = Template.bind({});
FullWidthContainerWithoutBackground.args = {
  hasBackground: false,
  hasPadding: true,
};
