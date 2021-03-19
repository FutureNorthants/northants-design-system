
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import WestColouredLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/West Coloured',
  component: WestColouredLogo
};

const Template: Story<LogoProps> = (args) => <SBPadding><WestColouredLogo {...args} /></SBPadding>;

export const LogoExample = Template.bind({});    
