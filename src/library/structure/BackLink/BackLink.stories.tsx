import React from 'react';
import { StoryFn } from '@storybook/react';
import BackLink from './BackLink';
import { BackLinkProps } from './BackLink.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Back Link',
  component: BackLink,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<BackLinkProps> = (args) => (
  <SBPadding>
    <BackLink {...args} />
  </SBPadding>
);

export const ExampleBackLink = Template.bind({});
ExampleBackLink.args = {
  link: '/',
};

export const ExampleBackLinkUseHistory = Template.bind({});
ExampleBackLinkUseHistory.args = {
  useHistory: true,
};
