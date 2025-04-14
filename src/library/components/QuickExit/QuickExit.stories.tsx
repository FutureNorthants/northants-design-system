import React from 'react';
import { StoryFn } from '@storybook/react';
import QuickExit from './QuickExit';
import { QuickExitProps } from './QuickExit.types';

import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/QuickExit',
  component: QuickExit,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<QuickExitProps> = (args) => (
  <SBPadding>
    <QuickExit {...args} />
  </SBPadding>
);

export const DefaultQuickExit = Template.bind({});
DefaultQuickExit.args = {};

export const QuickExitCustomTextAndURL = Template.bind({});
QuickExitCustomTextAndURL.args = {
  label: 'Quick exit >>>',
  url: 'https://www.google.co.uk',
};

export const QuickExitTransparent = Template.bind({});
QuickExitTransparent.args = {
  label: 'Quick exit >>>',
  isTransparent: true,
};

export const QuickExitWithIcon = Template.bind({});
QuickExitWithIcon.args = {
  hasIcon: true
};

export const QuickExitTransparentWithIcon = Template.bind({});
QuickExitTransparentWithIcon.args = {
  hasIcon: true,
  isTransparent: true
};

export const QuickExitWithIconAndNoLabel = Template.bind({});
QuickExitWithIconAndNoLabel.args = {
  label: '',
  hasIcon: true
};


export const QuickExitWithTransparentIconAndNoLabel = Template.bind({});
QuickExitWithTransparentIconAndNoLabel.args = {
  label: '',
  hasIcon: true,
  isTransparent: true
};