// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Button',
    component: Button
};

const Template: Story<ButtonProps> = (args) => <SBPadding><Button {...args} /></SBPadding>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
