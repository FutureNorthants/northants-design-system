
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import GDSLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/GDS Logo',
  component: GDSLogo
};

const Template: Story<LogoProps> = (args) => <SBPadding><GDSLogo {...args} /></SBPadding>;

export const LogoExample = Template.bind({});    
