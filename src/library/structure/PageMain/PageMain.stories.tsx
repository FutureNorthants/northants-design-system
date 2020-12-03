
import React from "react";
import PageMain from "./PageMain";
import { PageMainProps } from "./PageMain.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/Structure/Page Main Container',
    component: PageMain
};

const Template: Story<PageMainProps> = (args) => <PageMain {...args}>Children of the page container goes here</PageMain>;

export const PageMainExample = Template.bind({});
PageMainExample.args = {
  classes: 'testclass',
};
