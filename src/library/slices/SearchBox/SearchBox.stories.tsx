import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import SearchBox from './SearchBox';
import { SearchBoxProps } from './SearchBox.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleSearchBoxProps } from './SearchBox.storydata';
import { ExampleCustomSearchProps } from '../../components/CustomSearch/CustomSearch.storydata';

export default {
  title: 'Library/Slices/SearchBox',
  component: SearchBox,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SearchBoxProps> = (args) => (
  <SBPadding>
    <SearchBox {...args} />
  </SBPadding>
);

export const ExampleSearchBox = Template.bind({});
ExampleSearchBox.args = ExampleSearchBoxProps;

export const ExampleSearchBoxSecondaryLink = Template.bind({});
ExampleSearchBoxSecondaryLink.args = { ...ExampleSearchBoxProps, searchBoxLinkIsPrimary: false };

export const ExampleSearchBoxWithLabel = Template.bind({});
ExampleSearchBoxWithLabel.args = {
  ...ExampleSearchBoxProps,
  customSearch: { ...ExampleCustomSearchProps, hasHiddenLabel: false },
};

export const ExampleSearchBoxWithoutImage = Template.bind({});
ExampleSearchBoxWithoutImage.args = { ...ExampleSearchBoxProps, imageLarge: null, imageSmall: null };

export const ExampleSearchBoxWithoutLink = Template.bind({});
ExampleSearchBoxWithoutLink.args = {
  ...ExampleSearchBoxProps,
  searchBoxLink: null,
  customSearch: { ...ExampleCustomSearchProps, hasHiddenLabel: false },
};
