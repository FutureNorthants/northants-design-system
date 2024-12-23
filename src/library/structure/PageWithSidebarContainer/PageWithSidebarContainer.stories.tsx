import React from 'react';
import PageWithSidebarContainer from './PageWithSidebarContainer';
import type { Meta, StoryObj } from '@storybook/react';
import PageMain from '../PageMain/PageMain';
import PageSidebar from '../PageSidebar/PageSidebar';

const meta: Meta<typeof PageWithSidebarContainer> = {
  title: 'Library/structure/Page With Sidebar Container',
  component: PageWithSidebarContainer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageWithSidebarContainer>;

export const ExampleOfPageWithSidebar: Story = {
  render: () => (
    <PageWithSidebarContainer>
      <PageMain>this is the main contaniner</PageMain>
      <PageSidebar>this is the sidebar</PageSidebar>
    </PageWithSidebarContainer>
  ),
};

export const ExampleOfPageWithSidebarLeft: Story = {
  render: () => (
    <PageWithSidebarContainer>
      <PageSidebar>this is the sidebar</PageSidebar>
      <PageMain>this is the main contaniner</PageMain>
    </PageWithSidebarContainer>
  ),
};
