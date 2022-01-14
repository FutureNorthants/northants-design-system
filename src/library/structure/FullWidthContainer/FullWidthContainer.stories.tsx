import React from 'react';
import FullWidthContainer from './FullWidthContainer';
import { FullWidthContainerProps } from './FullWidthContainer.types';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Library/structure/Full width Container',
  component: FullWidthContainer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<FullWidthContainerProps> = (args) => (
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
