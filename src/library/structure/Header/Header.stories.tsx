import React from 'react';
import Header from './Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Library/structure/Header',
  component: Header,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    isHomepage: {
      table: { category: 'Links' },
    },
    homeLink: {
      table: { category: 'Links' },
    },
    hasNewsLink: {
      table: { category: 'Links' },
    },
    allServicesLink: {
      table: { category: 'Links' },
    },
    hideSearchBar: {
      table: { category: 'Search bar' },
    },
    searchSuggestions: {
      table: { category: 'Search bar' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderExample: Story = {
  args: {
    hasNewsLink: true,
    hasDirectoryLink: true,
    accessibilityLink: '/',
    allServicesLink: '/',
    hideSearchBar: false,
    searchSuggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
    hasTranslate: true,
  },
  render: (args) => <Header {...args}>Children of the page container go here</Header>,
  parameters: {
    pageLayout: 'page',
  },
};

export const HeaderNoNewsExample: Story = {
  ...HeaderExample,
  args: {
    hasNewsLink: false,
    allServicesLink: '/',
    hideSearchBar: false,
    searchSuggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
  },
};

export const HeaderNoSearchExample: Story = {
  ...HeaderExample,
  args: {
    hasNewsLink: true,
    accessibilityLink: '/',
    allServicesLink: '/',
    hideSearchBar: true,
    hasDirectoryLink: true,
    hasTranslate: true,
  },
};
