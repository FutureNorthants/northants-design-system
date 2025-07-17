import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryShortList from './DirectoryShortList';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof DirectoryShortList> = {
  title: 'Library/Directory/DirectoryShortList',
  component: DirectoryShortList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryShortList>;

export const ExampleDirectoryShortList: Story = {
  args: {
    directoryPath: '/directory',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider>
          <DirectoryShortList {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleDirectoryShortListWithCustomKey: Story = {
  args: {
    directoryPath: '/directory',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider shortlistKey="ExampleKey">
          <DirectoryShortList {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  ),
};
