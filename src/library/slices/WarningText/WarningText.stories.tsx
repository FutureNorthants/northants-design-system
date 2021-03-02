
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import WarningText from "./WarningText";
import { WarningTextProps } from "./WarningText.types";
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Slices/WarningText',
  component: WarningText
};

const Template: Story<WarningTextProps> = (args) => <MaxWidthContainer><WarningText {...args}>Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</WarningText></MaxWidthContainer>;
const Template2: Story<WarningTextProps> = (args) => <MaxWidthContainer><WarningText {...args}>We are in the process of adding information to this new unitary council website. Some pages will give you a link back to a previous council website to help you find what you need. <a href="/">Read more about the changes</a>.</WarningText></MaxWidthContainer>;


export const ExampleWarningText = Template.bind({});    
ExampleWarningText.args = {
  title: "Warning"
};

export const ExampleDisclaimerText = Template2.bind({});    
ExampleDisclaimerText.args = {
  title: "Why information is on a different website"
};
