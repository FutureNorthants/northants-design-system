
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "Library/Structure/Breadcrumbs"
};

const Template: Story<BreadcrumbsProps> = (args) => <SBPadding><Breadcrumbs {...args} /></SBPadding>;


export const BreadcrumbsExam = Template.bind({});    
BreadcrumbsExam.args = {
    breadcrumbsArray: [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Service landing page",
            url: "#2"
        }
    ]
};
