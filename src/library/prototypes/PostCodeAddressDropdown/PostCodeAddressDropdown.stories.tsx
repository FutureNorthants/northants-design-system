
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PostCodeAddressDropdown from "./PostCodeAddressDropdown";
import { PostCodeAddressDropdownProps } from "./PostCodeAddressDropdown.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Prototypes/Post Code Address Dropdown',
    component: PostCodeAddressDropdown
};

const Template: Story<PostCodeAddressDropdownProps> = (args) => <SBPadding><PostCodeAddressDropdown {...args} /></SBPadding>;

export const ExamplePostCodeAddressDropdown = Template.bind({});    
ExamplePostCodeAddressDropdown.args = {
  foo: "bar"
};

export const AnotherExamplePostCodeAddressDropdown = Template.bind({});    
AnotherExamplePostCodeAddressDropdown.args = {
  foo: "foo"
};
