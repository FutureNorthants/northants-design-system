
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import WarningTextDisclaimer from "./WarningTextDisclaimer";
import { WarningTextDisclaimerProps } from "./WarningTextDisclaimer.types";
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Slices/WarningTextDisclaimer',
  component: WarningTextDisclaimer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<WarningTextDisclaimerProps> = (args) => <MaxWidthContainer><WarningTextDisclaimer {...args}>Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</WarningTextDisclaimer></MaxWidthContainer>;


export const ExampleWarningTextDisclaimer = Template.bind({});    
