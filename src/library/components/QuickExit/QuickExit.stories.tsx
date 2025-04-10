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
  label: 'Quick exit >>>',
  url: 'https://www.google.co.uk',
  isSolid: false,
  hasIcon: false
};

export const QuickExitSolid = Template.bind({});
QuickExitSolid.args = {
  label: 'Quick exit >>>',
  url: 'https://www.google.co.uk',
  isSolid: true,
  hasIcon: false
};

export const QuickExitSolidWithIcon = Template.bind({});
QuickExitSolidWithIcon.args = {
  label: 'Quick exit',
  url: 'https://www.google.co.uk',
  isSolid: true,
  hasIcon: true
};