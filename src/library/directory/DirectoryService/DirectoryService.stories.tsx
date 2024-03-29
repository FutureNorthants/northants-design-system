import React from 'react';
import { StoryFn } from '@storybook/react';
import DirectoryService from './DirectoryService';
import { DirectoryServiceProps } from './DirectoryService.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import {
  ExampleService,
  MultipleLocations,
  OneVisitableLocation,
  OneVisitableLocationNoLatLon,
} from './DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { DirectoryShortListProvider, PageMain } from '../../..';

export default {
  title: 'Library/Directory/Directory Service',
  component: DirectoryService,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DirectoryServiceProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider>
          <DirectoryService {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryService = Template.bind({});
ExampleDirectoryService.args = ExampleService;

export const ExampleDirectoryServiceLongName = Template.bind({});
ExampleDirectoryServiceLongName.args = {
  ...ExampleService,
  ...{ name: 'This service has a very long name and will probably wrap' },
};

export const ExampleDirectoryServiceNoEmail = Template.bind({});
ExampleDirectoryServiceNoEmail.args = { ...ExampleService, ...{ email: '' } };

export const ExampleDirectoryServiceTwoLocations = Template.bind({});
ExampleDirectoryServiceTwoLocations.args = { ...ExampleService, ...{ service_at_locations: MultipleLocations } };

export const ExampleDirectoryServiceNotVisitable = Template.bind({});
ExampleDirectoryServiceNotVisitable.args = {
  ...ExampleService,
  ...{ service_at_locations: OneVisitableLocation },
};

export const ExampleDirectoryServiceVisitableNoLatLon = Template.bind({});
ExampleDirectoryServiceVisitableNoLatLon.args = {
  ...ExampleService,
  ...{ service_at_locations: OneVisitableLocationNoLatLon },
};

export const ExampleDirectoryNoLogo = Template.bind({});
ExampleDirectoryNoLogo.args = { ...ExampleService, ...{ organization: { logo: null } } };

export const ExampleDirectoryServiceNoContactDetails = Template.bind({});
ExampleDirectoryServiceNoContactDetails.args = { ...ExampleService, ...{ email: '', url: '', contacts: [] } };
