import React from 'react';
import { StoryFn } from '@storybook/react';
import QuickExit from './QuickExit';
import { QuickExitProps } from './QuickExit.types';

import { TestPageContent } from './QuickExit.SharedContent';

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

export const ExampleQuickExit = Template.bind({});
ExampleQuickExit.args = {
  children: <TestPageContent />,
};

export const AnotherExampleQuickExit = Template.bind({});
AnotherExampleQuickExit.args = {
  quickExitButtonLabel: 'Quick exit >>>',
  quickExitHyperlink: 'https://www.google.co.uk',
  children: <TestPageContent />,
};
