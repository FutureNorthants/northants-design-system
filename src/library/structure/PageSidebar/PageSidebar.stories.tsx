import React from 'react';
import PageSidebar from './PageSidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageSidebar> = {
  title: 'Library/structure/Page Sidebar Container',
  component: PageSidebar,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageSidebar>;

export const ExampleOfPageWithSidebar: Story = {
  render: (args) => <PageSidebar {...args}>This is where sidebar components would live</PageSidebar>,
};
