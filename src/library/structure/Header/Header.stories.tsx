import React from 'react';
import Header from './Header';
import { HeaderProps } from './Header.types';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Library/structure/Header',
  component: Header,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    id: {
      table: { category: 'Component' },
    },
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
      control: { type: 'array' },
    },
  },
};

const Template: StoryFn<HeaderProps> = (args) => <Header {...args}>Children of the page container go here</Header>;

export const HeaderExample = Template.bind({});
HeaderExample.args = {
  hasNewsLink: true,
  hasDirectoryLink: true,
  accessibilityLink: '/',
  allServicesLink: '/',
  hideSearchBar: false,
  searchSuggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
  hasTranslate: true,
};

export const HeaderNoNewsExample = Template.bind({});
HeaderNoNewsExample.args = {
  hasNewsLink: false,
  allServicesLink: '/',
  hideSearchBar: false,
  searchSuggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
};

export const HeaderNoSearchExample = Template.bind({});
HeaderNoSearchExample.args = {
  hasNewsLink: false,
  allServicesLink: false,
  hideSearchBar: true,
};

export const HeaderCludoSearch = Template.bind({});
HeaderCludoSearch.args = {
  hasNewsLink: true,
  hasDirectoryLink: true,
  accessibilityLink: '/',
  allServicesLink: '/',
  hideSearchBar: false,
  searchSuggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
  hasTranslate: true,
  hasCludo: true,
  customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
  engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
};
