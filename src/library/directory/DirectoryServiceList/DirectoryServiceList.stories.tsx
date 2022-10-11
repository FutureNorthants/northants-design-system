import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { uniqueID } from '../../helpers/helpers';

export default {
  title: 'Library/Directory/Directory Service List',
  component: DirectoryServiceList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DirectoryServiceListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryServiceList {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryServiceList = Template.bind({});
ExampleDirectoryServiceList.args = {
  services: [
    { ...ExampleService, ...{ id: uniqueID() } },
    { ...ExampleService, ...{ id: uniqueID() } },
    { ...ExampleService, ...{ id: uniqueID() } },
    { ...ExampleService, ...{ id: uniqueID() } },
    { ...ExampleService, ...{ id: uniqueID() } },
  ],
  totalResults: 156,
  searchTerm: 'council',
  searchPostcode: 'NN1 1ED',
};
