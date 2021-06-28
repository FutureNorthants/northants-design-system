
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import LinkIcon from "./LinkIcon";
import { LinkIconProps } from "./LinkIcon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Link',
  component: LinkIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<LinkIconProps> = (args) => <SBPadding><LinkIcon {...args} /></SBPadding>;

export const ExampleLinkIcon = Template.bind({});    
ExampleLinkIcon.args = {
  colourFill: "#111"
};
