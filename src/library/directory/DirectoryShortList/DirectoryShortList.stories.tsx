import React from 'react';
import { StoryFn } from '@storybook/react';
import DirectoryShortList from './DirectoryShortList';
import { DirectoryShortListProps } from './DirectoryShortList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Directory/DirectoryShortList',
  component: DirectoryShortList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DirectoryShortListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider>
          <DirectoryShortList {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryShortList = Template.bind({});
ExampleDirectoryShortList.args = {
  directoryPath: '/directory',
};

const TemplateWithKey: StoryFn<DirectoryShortListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider shortlistKey="ExampleKey">
          <DirectoryShortList {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryShortListWithCustomKey = TemplateWithKey.bind({});
ExampleDirectoryShortListWithCustomKey.args = {
  directoryPath: '/directory',
};
