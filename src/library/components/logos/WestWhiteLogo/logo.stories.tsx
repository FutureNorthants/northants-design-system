
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import WestWhiteLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/West White',
  component: WestWhiteLogo
};

const Template: Story<LogoProps> = (args) => <div style={ { backgroundColor: "black" }}><SBPadding><WestWhiteLogo {...args} /></SBPadding></div>;

export const LogoExample = Template.bind({});    
