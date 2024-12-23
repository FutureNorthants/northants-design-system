import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BackLink from './BackLink';

const meta: Meta<typeof BackLink> = {
  title: 'Library/Structure/Back Link',
  component: BackLink,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackLink>;

export const ExampleBackLink: Story = {
  args: {
    link: '/',
  },
};

export const ExampleBackLinkUseHistory: Story = {
  args: {
    useHistory: true,
  },
};
