import React from 'react';
import { StoryFn } from '@storybook/react';
import QuickExit3 from './QuickExit3';
import { QuickExit3Props } from './QuickExit3.types';

import { TestPageContent } from './QuickExit3.SharedContent';

import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/QuickExit3',
  component: QuickExit3,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<QuickExit3Props> = (args) => (
  <SBPadding>
    <QuickExit3 {...args} />
  </SBPadding>
);

export const ExampleQuickExit3 = Template.bind({});
ExampleQuickExit3.args = {
  children: <TestPageContent />,
};

export const AnotherExampleQuickExit3 = Template.bind({});
AnotherExampleQuickExit3.args = {
  quickExit3ButtonLabel: 'Quick exit',
  quickExit3Hyperlink: 'https://www.google.co.uk',
  children: <TestPageContent />,
};
