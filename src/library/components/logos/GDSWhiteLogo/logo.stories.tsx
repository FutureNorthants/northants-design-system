
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import GDSWhiteLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/GDS White',
  component: GDSWhiteLogo
};

const Template: Story<LogoProps> = (args) => <SBPadding><GDSWhiteLogo {...args} /></SBPadding>;

export const LogoExample = Template.bind({});    
