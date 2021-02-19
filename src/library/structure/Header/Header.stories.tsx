
import React from "react";
import Header from "./Header";
import { HeaderProps } from "./Header.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Header',
    component: Header
};

const Template: Story<HeaderProps> = (args) => <Header {...args}>Children of the page container goes here</Header>;


export const HeaderPageExample = Template.bind({});

export const HeaderHomeExample = Template.bind({});
HeaderHomeExample.args = {
  hideSearchBar: true
};
