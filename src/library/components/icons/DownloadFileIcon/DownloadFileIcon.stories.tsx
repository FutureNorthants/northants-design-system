
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import DownloadFileIcon from "./DownloadFileIcon";
import { DownloadFileIconProps } from "./DownloadFileIcon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Download File',
  component: DownloadFileIcon
};

const Template: Story<DownloadFileIconProps> = (args) => <SBPadding><DownloadFileIcon {...args} /></SBPadding>;

export const ExampleDownloadFileIcon = Template.bind({});    
ExampleDownloadFileIcon.args = {
  colourFill: "#111"
};
