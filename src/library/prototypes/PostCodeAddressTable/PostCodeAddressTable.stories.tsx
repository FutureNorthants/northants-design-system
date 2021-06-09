
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PostCodeAddressTable from "./PostCodeAddressTable";
import { PostCodeAddressTableProps } from "./PostCodeAddressTable.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Prototypes/Post Code Address Table',
    component: PostCodeAddressTable
};

const Template: Story<PostCodeAddressTableProps> = (args) => <SBPadding><PostCodeAddressTable {...args} /></SBPadding>;

export const ExamplePostCodeAddressTable = Template.bind({});    
ExamplePostCodeAddressTable.args = {
  foo: "bar"
};

export const AnotherExamplePostCodeAddressTable = Template.bind({});    
AnotherExamplePostCodeAddressTable.args = {
  foo: "foo"
};
