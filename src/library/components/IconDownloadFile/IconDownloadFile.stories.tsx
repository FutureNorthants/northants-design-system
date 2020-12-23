
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import IconDownloadFile from "./IconDownloadFile";
import { IconDownloadFileProps } from "./IconDownloadFile.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Icon Download File',
  component: IconDownloadFile
};

const Template: Story<IconDownloadFileProps> = (args) => <SBPadding><IconDownloadFile {...args} /></SBPadding>;

export const ExampleIconDownloadFile = Template.bind({});    
ExampleIconDownloadFile.args = {
  colourFill: "#111"
};
