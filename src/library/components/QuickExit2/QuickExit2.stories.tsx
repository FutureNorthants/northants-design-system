import React from 'react';
import { StoryFn } from '@storybook/react';
import QuickExit2 from './QuickExit2';
import { QuickExit2Props } from './QuickExit2.types';

import { TestPageContent } from './QuickExit2.SharedContent';

import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/QuickExit2',
  component: QuickExit2,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<QuickExit2Props> = (args) => (
  <SBPadding>
    <QuickExit2 {...args} />
  </SBPadding>
);

export const ExampleQuickExit2 = Template.bind({});
ExampleQuickExit2.args = {
  children: <TestPageContent />,
};

export const AnotherExampleQuickExit2 = Template.bind({});
AnotherExampleQuickExit2.args = {
  quickExit2ButtonLabel: 'Quick exit >>>',
  quickExit2Hyperlink: 'https://www.google.co.uk',
  children: <TestPageContent />,
};
