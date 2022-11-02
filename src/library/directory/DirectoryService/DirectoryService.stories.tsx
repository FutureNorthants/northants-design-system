import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DirectoryService from './DirectoryService';
import { DirectoryServiceProps } from './DirectoryService.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleService } from './DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { PageMain } from '../../..';

export default {
  title: 'Library/Directory/Directory Service',
  component: DirectoryService,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DirectoryServiceProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryService {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryService = Template.bind({});
ExampleDirectoryService.args = ExampleService;

export const ExampleDirectoryServiceNoEmail = Template.bind({});
ExampleDirectoryServiceNoEmail.args = { ...ExampleService, ...{ email: '' } };
