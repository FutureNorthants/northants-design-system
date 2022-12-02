import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SearchBox from './SearchBox';
import { SearchBoxProps } from './SearchBox.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleSearchBoxProps } from './SearchBox.storydata';

export default {
  title: 'Library/Slices/SearchBox',
  component: SearchBox,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<SearchBoxProps> = (args) => (
  <SBPadding>
    <SearchBox {...args} />
  </SBPadding>
);

export const ExampleSearchBox = Template.bind({});
ExampleSearchBox.args = ExampleSearchBoxProps;

export const ExampleSearchBoxWithLabel = Template.bind({});
ExampleSearchBoxWithLabel.args = { ...ExampleSearchBoxProps, labelHidden: false };

export const ExampleSearchBoxWithoutImage = Template.bind({});
ExampleSearchBoxWithoutImage.args = { ...ExampleSearchBoxProps, imageLarge: null, imageSmall: null };

export const ExampleSearchBoxWithoutLink = Template.bind({});
ExampleSearchBoxWithoutLink.args = { ...ExampleSearchBoxProps, searchBoxLink: null, labelHidden: false };
