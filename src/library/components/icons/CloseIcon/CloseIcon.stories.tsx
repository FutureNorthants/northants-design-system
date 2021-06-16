
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CloseIcon from "./CloseIcon";
import { CloseIconProps } from "./CloseIcon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Close',
  component: CloseIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<CloseIconProps> = (args) => <SBPadding><CloseIcon {...args} /></SBPadding>;

export const ExampleCloseIcon = Template.bind({});    
ExampleCloseIcon.args = {
  colourFill: "#111"
};
