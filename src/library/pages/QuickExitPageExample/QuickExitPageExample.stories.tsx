import React from 'react';
import { StoryFn } from '@storybook/react';
import QuickExit from '../../components/QuickExit/QuickExit';
import { QuickExitPageExampleProps } from './QuickExitPageExample.types';
import QuickExitPageExample from './QuickExitPageExample';
import { QuickExitPageExample1 } from './QuickExitPageExample.storydata';

import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Page Examples/Quick Exit Page example',
  component: QuickExitPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<QuickExitPageExampleProps> = (args) => (
  <SBPadding>
    <QuickExitPageExample {...args} />
  </SBPadding>
);

export const QuickExitExamplePage = Template.bind({});
QuickExitExamplePage.args = {
  children: <QuickExitPageExample1 />,
};

export const QuickExitExamplePageWithBackToTop = Template.bind({});
QuickExitExamplePageWithBackToTop.args = {
  includeBackToTopInExample: true,
  children: <QuickExitPageExample1 />,
};

export const AnotherQuickExitExamplePage = Template.bind({});
AnotherQuickExitExamplePage.args = {
  quickExitButtonLabel: 'Quick exit >>>',
  quickExitHyperlink: 'https://www.google.co.uk',
  children: <QuickExitPageExample1 />,
};

export const AQuickExitExamplePageWithBackToTopIncluded = Template.bind({});
AQuickExitExamplePageWithBackToTopIncluded.args = {
  quickExitButtonLabel: 'Quick exit >>>',
  quickExitHyperlink: 'https://www.google.co.uk',
  includeBackToTopInExample: true,
  children: <QuickExitPageExample1 />,
};

/* 

  quickExitButtonColour: '#21c106',
  quickExitButtonSecondaryColour: 'blue',
  quickExitButtonTextColour: 'white',
  quickExitButtonFontFamily: 'Calibri',
  quickExitButtonFontSize: '32px',

  quickExitButtonColour: '#21c106',
  quickExitButtonSecondaryColour: 'blue',
  quickExitButtonTextColour: 'white',
  quickExitButtonFontFamily: 'Calibri',
  quickExitButtonFontSize: '32px',

  */
