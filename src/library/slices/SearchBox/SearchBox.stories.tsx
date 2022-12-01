import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SearchBox from './SearchBox';
import { SearchBoxProps } from './SearchBox.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

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
ExampleSearchBox.args = {
  path: 'https://courses.northantsglobal.net/CourseKeySearch.asp',
  method: 'post',
  fieldName: 'keyword',
  searchText: 'Search courses',
  placeholder: 'Search courses',
  label: 'Search courses',
  labelHidden: true,
};

export const ExampleSearchBoxWithLabel = Template.bind({});
ExampleSearchBoxWithLabel.args = {
  path: 'https://courses.northantsglobal.net/CourseKeySearch.asp',
  method: 'post',
  fieldName: 'keyword',
  searchText: 'Search',
  placeholder: 'Enter search term',
  label: 'Search courses',
  labelHidden: false,
};
