import React from 'react';
import PageSidebar from './PageSidebar';
import { PageSidebarProps } from './PageSidebar.types';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Library/structure/Page Sidebar Container',
  component: PageSidebar,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PageSidebarProps> = (args) => (
  <PageSidebar {...args}>Children of the page container goes here</PageSidebar>
);

export const ExampleOfPageWithSidebar = () => <PageSidebar>This is where sidebar components would live</PageSidebar>;
