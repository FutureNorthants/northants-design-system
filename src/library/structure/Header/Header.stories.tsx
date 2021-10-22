
import React from "react";
import Header from "./Header";
import { HeaderProps } from "./Header.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Header',
    component: Header,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<HeaderProps> = (args) => <Header {...args}>Children of the page container goes here</Header>;


export const HeaderExample = Template.bind({
  allServicesLink: "/",
  hideSearchBar: false
});

export const HeaderNoSearchExample = Template.bind({});
HeaderNoSearchExample.args = {
  hideSearchBar: true,
  allServicesLink: false
};
