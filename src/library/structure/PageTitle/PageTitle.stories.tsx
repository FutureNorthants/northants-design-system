
import React from "react";
import PageTitle from "./PageTitle";
import { PageTitleProps } from "./PageTitle.types";
import { Story } from '@storybook/react/types-6-0';
import Heading from '../../components/Heading/Heading';

export default {
    title: 'Library/structure/Page Title Container',
    component: PageTitle
};

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args}> <Heading level={1} text="News" /></PageTitle>;

export const PageTitleExample = Template.bind({});
PageTitleExample.args = {
  classes: 'testclass',
};

