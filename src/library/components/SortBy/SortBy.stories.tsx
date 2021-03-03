
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SortBy from "./SortBy";
import { SortByProps } from "./SortBy.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import sortByOptions from './SortByData';

export default {
  title: 'Library/Components/Sort by',
  component: SortBy
};

const Template: Story<SortByProps> = (args) => <SBPadding><SortBy {...args} /></SBPadding>;

export const ExampleSortBy = Template.bind({});    
ExampleSortBy.args = {
  selected: 'recentDesc',
  options: sortByOptions
};
