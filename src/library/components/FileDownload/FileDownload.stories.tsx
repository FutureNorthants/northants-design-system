import React from 'react';
import { StoryFn } from '@storybook/react';
import FileDownload from './FileDownload';
import { FileDownloadProps } from './FileDownload.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/File download',
  component: FileDownload,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<FileDownloadProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <FileDownload {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleFileDownload = Template.bind({});
ExampleFileDownload.args = {
  title: 'File title',
  type: 'PDF',
  url: 'https://www.google.com/test.pdf',
  size: '1.2 MB',
};

export const FileDownloadWithLongTitle = Template.bind({});
FileDownloadWithLongTitle.args = {
  title:
    'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  type: 'Adobe Portable Document Format',
  url: 'https://www.google.com/test4.pdf',
  size: '1.2 MB',
};

export const FileDownloadWithArchived = Template.bind({});
FileDownloadWithArchived.args = {
  title: 'This file download has rel archived',
  type: 'Microsoft Office - OOXML - Word Document',
  url: 'https://www.google.com/test.pdf',
  size: '1.2MB',
  archived: true,
};
