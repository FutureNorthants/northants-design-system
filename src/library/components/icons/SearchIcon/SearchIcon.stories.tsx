
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SearchIcon from "./SearchIcon";
import { SearchIconProps } from "./SearchIcon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Icon Search',
  component: SearchIcon
};

const Template: Story<SearchIconProps> = (args) => <SBPadding><SearchIcon {...args} /></SBPadding>;

export const ExampleSearchIcon = Template.bind({});    
ExampleSearchIcon.args = {
  colourFill: "#111"
};
