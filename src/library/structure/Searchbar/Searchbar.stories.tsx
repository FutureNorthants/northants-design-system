import React from 'react';
import { StoryFn } from '@storybook/react';
import Searchbar from './Searchbar';
import { SearchbarProps } from './Searchbar.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/structure/Searchbar',
  component: Searchbar,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    id: {
      table: { category: 'Input control' },
    },
    searchTerm: {
      table: { category: 'Input control' },
    },
    size: {
      control: {
        type: 'number',
        min: 10,
        max: 200,
        step: 1,
      },
      table: { category: 'Input control' },
    },
    placeholder: {
      table: { category: 'Input control' },
    },
    isLight: {
      table: { category: 'Input control' },
    },
    isLarge: {
      table: { category: 'Input control' },
    },
    suggestions: {
      table: { category: 'Suggestions' },
    },
    minimumMatchLength: {
      control: {
        type: 'number',
        min: 1,
        max: 16,
        step: 1,
      },
      table: { category: 'Suggestions' },
    },
    maximumMatchesShown: {
      control: {
        type: 'number',
        min: 1,
        max: 200,
        step: 1,
      },
      table: { category: 'Suggestions' },
    },
    submitInfo: {
      table: { category: 'Form submission' },
    },
  },
};

const CommonArgs = {
  size: 43,
  minimumMatchLength: 2,
  suggestions: ['Apply for a parking permit', 'Bin collections', 'Council tax payments'],
  submitInfo: {
    postTo: '/search',
    params: {
      type: 'search',
    },
  },
};

const Template: StoryFn<SearchbarProps> = (args) => (
  <SBPadding>
    <Searchbar {...args} />
  </SBPadding>
);

export const ExampleSearchbarDefaultNorth = Template.bind({});
ExampleSearchbarDefaultNorth.parameters = {
  backgrounds: { default: 'north' },
};
ExampleSearchbarDefaultNorth.args = {
  ...CommonArgs,
};

export const ExampleSearchbarDefaultWest = Template.bind({});
ExampleSearchbarDefaultWest.parameters = {
  backgrounds: { default: 'west' },
};
ExampleSearchbarDefaultWest.args = {
  ...CommonArgs,
};

export const ExampleSearchbarWhiteBackground = Template.bind({});
ExampleSearchbarWhiteBackground.args = {
  ...CommonArgs,
  isLight: true,
};

export const ExampleSearchPage = Template.bind({});
ExampleSearchPage.args = {
  ...CommonArgs,
  isLight: true,
  isLarge: true,
};

export const ExampleSearchPageWithTerm = Template.bind({});
ExampleSearchPageWithTerm.args = {
  ...CommonArgs,
  isLight: true,
  isLarge: true,
  searchTerm: 'council tax',
};
