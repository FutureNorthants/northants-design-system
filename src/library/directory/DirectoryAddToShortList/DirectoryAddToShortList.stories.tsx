import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DirectoryAddToShortList from './DirectoryAddToShortList';
import { DirectoryAddToShortListProps } from './DirectoryAddToShortList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

export default {
  title: 'Library/Directory/DirectoryAddToShortList',
  component: DirectoryAddToShortList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DirectoryAddToShortListProps> = (args) => (
  <SBPadding>
    <DirectoryShortListProvider>
      <DirectoryAddToShortList {...args} />
    </DirectoryShortListProvider>
  </SBPadding>
);

export const ExampleDirectoryAddToShortList = Template.bind({});
ExampleDirectoryAddToShortList.args = {
  id: 'abc111',
  name: 'Service name',
  snippet:
    'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to residents and businesses in the areas of Daventry,...',
};
