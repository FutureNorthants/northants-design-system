
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PageWrapper from "./PageWrapper";
import { PageWrapperProps } from "./PageWrapper.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/PageWrapper',
    component: PageWrapper
};

const Template: Story<PageWrapperProps> = (args) => <SBPadding><PageWrapper {...args} /></SBPadding>;

export const ExamplePageWrapper = Template.bind({});    
ExamplePageWrapper.args = {
  colour: 'grey'
};
