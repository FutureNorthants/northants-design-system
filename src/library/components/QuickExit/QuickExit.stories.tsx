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

export const QuickExitTransparent = Template.bind({});
QuickExitTransparent.args = {
  quickExitButtonLabel: 'Quick exit >>>',
  quickExitHyperlink: 'https://www.google.co.uk',
  quickExitButtonSolidOrTransparent: 'transparent',
  quickExitButtonIncludeIcon: false
};

export const QuickExitSolid = Template.bind({});
QuickExitSolid.args = {
  quickExitButtonLabel: 'Quick exit >>>',
  quickExitHyperlink: 'https://www.google.co.uk',
  quickExitButtonSolidOrTransparent: 'solid',
  quickExitButtonIncludeIcon: false
};

export const QuickExitSolidWithIcon = Template.bind({});
QuickExitSolidWithIcon.args = {
  quickExitButtonLabel: 'Quick exit',
  quickExitHyperlink: 'https://www.google.co.uk',
  quickExitButtonSolidOrTransparent: 'solid',
  quickExitButtonIncludeIcon: true
};