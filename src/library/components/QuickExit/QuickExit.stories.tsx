import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import QuickExit from "./QuickExit";

const meta: Meta<typeof QuickExit> = {
  title: 'Library/Components/QuickExit',
  component: QuickExit,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

export default meta;
type Story = StoryObj<typeof QuickExit>;

export const DefaultQuickExit :Story = {
  render: (args) => <QuickExit {...args} />
};

export const QuickExitCustomTextAndURL: Story = {
  ...DefaultQuickExit,
  args: {
    label: 'Quick exit >>>',
    url: 'https://www.google.co.uk',
  }
};

export const QuickExitTransparent: Story = {
  ...DefaultQuickExit,
  args: {
    label: 'Quick exit >>>',
    isTransparent: true,
  }
};

export const QuickExitWithIcon: Story = {
  ...DefaultQuickExit,
  args: {
    hasIcon: true
  }
};

export const QuickExitTransparentWithIcon: Story = {
  ...DefaultQuickExit,
  args: {
    hasIcon: true,
    isTransparent: true
  }
};

export const QuickExitWithIconAndNoLabel: Story = {
  ...DefaultQuickExit,
  args: {
    label: '',
    hasIcon: true
  }
};

export const QuickExitWithTransparentIconAndNoLabel: Story = {
  ...DefaultQuickExit,
  args: {
    label: '',
    hasIcon: true,
    isTransparent: true
  }
};






