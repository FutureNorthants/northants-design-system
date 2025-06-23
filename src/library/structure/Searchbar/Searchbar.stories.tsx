import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from './Searchbar';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

const meta: Meta<typeof Searchbar> = {
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

export default meta;
type Story = StoryObj<typeof Searchbar>;

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

export const ExampleSearchbarDefaultNorth: Story = {
  parameters: {
    backgrounds: { default: 'north' },
  },
  args: {
    ...CommonArgs,
  },
};

export const ExampleSearchbarDefaultWest: Story = {
  parameters: {
    backgrounds: { default: 'west' },
  },
  args: {
    ...CommonArgs,
  },
};

export const ExampleSearchbarWhiteBackground: Story = {
  args: {
    ...CommonArgs,
    isLight: true,
  },
};

export const ExampleSearchPage: Story = {
  args: {
    ...CommonArgs,
    isLight: true,
    isLarge: true,
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <Searchbar {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleSearchPageSmall: Story = {
  ...ExampleSearchPage,
  args: {
    ...CommonArgs,
    isLight: true,
    isLarge: false,
  },
};

export const ExampleSearchPageWithTerm: Story = {
  ...ExampleSearchPage,
  args: {
    ...CommonArgs,
    isLight: true,
    isLarge: true,
    searchTerm: 'council tax',
  },
};
