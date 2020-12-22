
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SkipToMainContent from "./SkipToMainContent";
import { SkipToMainContentProps } from "./SkipToMainContent.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/structure/Skip to main content',
    component: SkipToMainContent
};

const Template: Story<SkipToMainContentProps> = (args) => <SBPadding><SkipToMainContent {...args} /></SBPadding>;

export const ExampleSkipToMainContent = Template.bind({});    