
import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Button',
    component: Button,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<ButtonProps> = (args) => <SBPadding><Button {...args} /></SBPadding>;

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

export const ColourOverride = Template.bind({});
ColourOverride.args = {
  primary: true,
  text: 'This might not be accessible if the overrided colour is too light!',
  url: "https://futurenorthantswest.org/",
  colourOverride: "pink"
};