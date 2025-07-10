import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FileDownload from './FileDownload';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof FileDownload> = {
  title: 'Library/Components/File download',
  component: FileDownload,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileDownload>;

export const ExampleFileDownload: Story = {
  args: {
    title: 'File title',
    type: 'PDF',
    url: 'https://www.google.com/test.pdf',
    size: '1.2 MB',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <FileDownload {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const FileDownloadWithLongTitle: Story = {
  ...ExampleFileDownload,
  args: {
    title:
      'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    type: 'Adobe Portable Document Format',
    url: 'https://www.google.com/test4.pdf',
    size: '1.2 MB',
  },
};

export const FileDownloadWithArchived: Story = {
  ...ExampleFileDownload,
  args: {
    title: 'This file download has rel archived',
    type: 'Microsoft Office - OOXML - Word Document',
    url: 'https://www.google.com/test.pdf',
    size: '1.2MB',
    archived: true,
  },
};
