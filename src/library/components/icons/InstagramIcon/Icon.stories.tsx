import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Icon from "./Icon";
import { IconProps } from "../services/Icon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Instagram',
  component: Icon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<IconProps> = (args) => <SBPadding><Icon {...args} /></SBPadding>;

export const ExampleInstagramIcon = Template.bind({});    
ExampleInstagramIcon.args = {
  colourFill: "#111"
};
