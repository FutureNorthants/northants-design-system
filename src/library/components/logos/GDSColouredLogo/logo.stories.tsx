
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import GDSColouredLogo from "./logo";
import { LogoProps } from "./logo.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/GDS Coloured',
  component: GDSColouredLogo
};

const Template: Story<LogoProps> = (args) => <SBPadding><GDSColouredLogo {...args} /></SBPadding>;

export const LogoExample = Template.bind({});    
