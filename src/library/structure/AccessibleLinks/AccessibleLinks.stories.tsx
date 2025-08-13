import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import AccessibleLinks from './AccessibleLinks';

const meta: Meta<typeof AccessibleLinks> = {
  title: 'Library/Structure/Accessible links',
  component: AccessibleLinks,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleAccessibleLinks: Story = {
  args: {
    AccessibleLinksArray: [
      {
        title: 'Skip to Accessibility Statement',
        url: '/accessibility-statement',
        isExternal: false,
      },
      {
        title: 'Skip to website feedback form',
        url: '/web-feedback',
        isExternal: true,
      },
    ],
  },
};
