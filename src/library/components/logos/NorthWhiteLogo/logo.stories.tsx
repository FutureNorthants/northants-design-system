
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NorthWhiteLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/North White',
  component: NorthWhiteLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<LogoProps> = (args) => <div style={ { backgroundColor: "black" }}><SBPadding><NorthWhiteLogo {...args} /></SBPadding></div>;

export const LogoExample = Template.bind({});    
