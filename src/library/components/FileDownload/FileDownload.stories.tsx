import React from "react";
import { Story } from '@storybook/react/types-6-0';
import FileDownload from "./FileDownload";
import { FileDownloadProps } from "./FileDownload.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/File download',
  component: FileDownload
};

const Template: Story<FileDownloadProps> = (args) => <SBPadding><FileDownload {...args} /></SBPadding>;

// export const ExampleFileDownload = Template.bind({});    
// ExampleFileDownload.args = {
//   title: "a",
//   type: "b",
//   url: "c",
//   size: "d"
// };


export const ExampleFileDownload = Template.bind({});    
ExampleFileDownload.args = {
  title: "File title",
  type: "PDF",
  url: "https://www.google.com/test.pdf",
  size: "1.2 MB"
};

export const ExampleLongTitleFileDownload = Template.bind({});    
ExampleFileDownload.args = {
  title: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  type: "Adobe Portable Document Format",
  url: "https://www.google.com/test4.pdf",
  size: "1.2 MB"
};
