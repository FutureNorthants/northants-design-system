import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import QuickExitPageExample from './QuickExitPageExample';
import { QuickExitPageExample1 } from './QuickExitPageExample.storydata';

const meta: Meta<typeof QuickExitPageExample> = {
  title: 'Page Examples/Quick Exit Page example',
  component: QuickExitPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const QuickExitExamplePage: Story = {
  args: { children: <QuickExitPageExample1 /> },
  render: (args) => <QuickExitPageExample {...args} />,
};

export const QuickExitExamplePageWithBackToTop: Story = {
  ...QuickExitExamplePage,
  args: {
    includeBackToTopInExample: true,
    children: <QuickExitPageExample1 />,
  },
};

export const AnotherQuickExitExamplePage: Story = {
  ...QuickExitExamplePage,
  args: {
    label: 'Quick Exit',
    url: 'https://www.google.co.uk',
    children: <QuickExitPageExample1 />,
  },
};

export const AQuickExitExamplePageWithBackToTopIncluded: Story = {
  ...QuickExitExamplePage,
  args: {
    label: 'Quick exit',
    includeBackToTopInExample: true,
    children: <QuickExitPageExample1 />,
  },
};
export const AQuickExitExamplePageWithIconOnly: Story = {
  ...QuickExitExamplePage,
  args: {
    label: '',
    includeBackToTopInExample: true,
    children: <QuickExitPageExample1 />,
  },
};
