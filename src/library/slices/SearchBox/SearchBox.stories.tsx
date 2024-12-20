import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';
import { ExampleSearchBoxProps } from './SearchBox.storydata';
import { ExampleCustomSearchProps } from '../../components/CustomSearch/CustomSearch.storydata';

const meta: Meta<typeof SearchBox> = {
  title: 'Library/Slices/SearchBox',
  component: SearchBox,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const ExampleSearchBox: Story = {
  args: ExampleSearchBoxProps,
};

export const ExampleSearchBoxSecondaryLink: Story = {
  args: { ...ExampleSearchBoxProps, searchBoxLinkIsPrimary: false },
};

export const ExampleSearchBoxWithLabel: Story = {
  args: {
    ...ExampleSearchBoxProps,
    customSearch: { ...ExampleCustomSearchProps, hasHiddenLabel: false },
  },
};

export const ExampleSearchBoxWithoutImage: Story = {
  args: { ...ExampleSearchBoxProps, imageLarge: null, imageSmall: null },
};

export const ExampleSearchBoxWithoutLink: Story = {
  args: {
    ...ExampleSearchBoxProps,
    searchBoxLink: null,
    customSearch: { ...ExampleCustomSearchProps, hasHiddenLabel: false },
  },
};
