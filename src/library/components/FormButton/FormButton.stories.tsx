
import React from "react";
import FormButton from "./FormButton";
import { FormButtonProps } from "./FormButton.types";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/FormButton',
    component: FormButton
};

const Template: Story<FormButtonProps> = (args) => <SBPadding><FormButton {...args} /></SBPadding>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'FormButton label'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  text: 'FormButton label'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'FormButton label'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'FormButton label'
};
