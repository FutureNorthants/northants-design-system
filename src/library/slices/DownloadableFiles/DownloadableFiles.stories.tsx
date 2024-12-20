import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DownloadableFiles from './DownloadableFiles';

const meta: Meta<typeof DownloadableFiles> = {
  title: 'Library/Slices/Downloadable files',
  component: DownloadableFiles,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DownloadableFiles>;

export const SingleDownloadableFile: Story = {
  args: {
    files: [
      {
        title: 'File title',
        type: 'PDF',
        url: 'https://www.google.com/test1.pdf',
        size: '1.2 MB',
        archived: false,
      },
    ],
  },
};

export const MultipleDownloadableFiles: Story = {
  args: {
    files: [
      {
        title: 'File title',
        type: 'PDF',
        url: 'https://www.google.com/test2.pdf',
        size: '1.2 MB',
        archived: false,
      },
      {
        title: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        type: 'PDF',
        url: 'https://www.google.com/test3.pdf',
        size: '279.06 KB',
        archived: false,
      },
    ],
  },
};

export const LongTitleDownloadableFiles: Story = {
  args: {
    files: [
      {
        title:
          'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
        type: 'PDF',
        url: 'https://www.google.com/test4.pdf',
        size: '1.2 MB',
        archived: false,
      },
      {
        title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        type: 'PDF',
        url: 'https://www.google.com/test5.pdf',
        size: '279.06 KB',
        archived: false,
      },
    ],
  },
};

export const NoDownloadableFile: Story = {
  args: {
    files: [],
  },
};
