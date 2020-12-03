
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
  label: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button label',
  url: "https://futurenorthantswest.org/"
};
