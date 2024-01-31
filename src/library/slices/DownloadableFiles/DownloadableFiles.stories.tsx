import React from 'react';
import { StoryFn } from '@storybook/react';
import DownloadableFiles from './DownloadableFiles';
import { DownloadableFilesProps } from './DownloadableFiles.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/Downloadable files',
  component: DownloadableFiles,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DownloadableFilesProps> = (args) => (
  <SBPadding>
    <DownloadableFiles {...args} />
  </SBPadding>
);

export const SingleDownloadableFile = Template.bind({});
SingleDownloadableFile.args = {
  files: [
    {
      title: 'File title',
      type: 'PDF',
      url: 'https://www.google.com/test1.pdf',
      size: '1.2 MB',
    },
  ],
};

export const MultipleDownloadableFiles = Template.bind({});
MultipleDownloadableFiles.args = {
  files: [
    {
      title: 'File title',
      type: 'PDF',
      url: 'https://www.google.com/test2.pdf',
      size: '1.2 MB',
    },
    {
      title: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      type: 'PDF',
      url: 'https://www.google.com/test3.pdf',
      size: '279.06 KB',
    },
  ],
};

export const LongTitleDownloadableFiles = Template.bind({});
LongTitleDownloadableFiles.args = {
  files: [
    {
      title:
        'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      type: 'PDF',
      url: 'https://www.google.com/test4.pdf',
      size: '1.2 MB',
    },
    {
      title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
      type: 'PDF',
      url: 'https://www.google.com/test5.pdf',
      size: '279.06 KB',
    },
  ],
};

export const NoDownloadableFile = Template.bind({});
NoDownloadableFile.args = {
  files: [],
};
