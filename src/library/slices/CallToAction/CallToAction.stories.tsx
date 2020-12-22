
import React from "react";
import CallToAction from "./CallToAction";
import { ButtonProps } from "../../components/Button/Button.types";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Slices/CallToAction',
    component: CallToAction
};

const Template: Story<ButtonProps> = (args) => <SBPadding><CallToAction {...args} /></SBPadding>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  text: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button label',
  url: "https://futurenorthantswest.org/"
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Button label',
  url: "https://futurenorthantswest.org/"
};
