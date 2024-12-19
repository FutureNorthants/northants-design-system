import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryAddToShortList from './DirectoryAddToShortList';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

const meta: Meta<typeof DirectoryAddToShortList> = {
  title: 'Library/Directory/DirectoryAddToShortList',
  component: DirectoryAddToShortList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryAddToShortList>;

export const ExampleDirectoryAddToShortList: Story = {
  args: {
    id: 'abc111',
    name: 'Service name',
    snippet:
      'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to residents and businesses in the areas of Daventry,...',
  },
  render: (args) => (
    <DirectoryShortListProvider>
      <DirectoryAddToShortList {...args} />
    </DirectoryShortListProvider>
  ),
};
