import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryService from './DirectoryService';
import {
  ExampleService,
  MultipleLocations,
  OneVisitableLocation,
  OneVisitableLocationNoLatLon,
} from './DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { DirectoryShortListProvider, PageMain } from '../../..';

const meta: Meta<typeof DirectoryService> = {
  title: 'Library/Directory/Directory Service',
  component: DirectoryService,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryService>;

export const ExampleDirectoryService: Story = {
  args: ExampleService,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider>
          <DirectoryService {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleDirectoryServiceLongName: Story = {
  ...ExampleDirectoryService,
  args: {
    ...ExampleService,
    ...{ name: 'This service has a very long name and will probably wrap' },
  },
};

export const ExampleDirectoryServiceNoEmail: Story = {
  ...ExampleDirectoryService,
  args: { ...ExampleService, ...{ email: '' } },
};

export const ExampleDirectoryServiceTwoLocations: Story = {
  ...ExampleDirectoryService,
  args: { ...ExampleService, ...{ service_at_locations: MultipleLocations } },
};

export const ExampleDirectoryServiceNotVisitable: Story = {
  ...ExampleDirectoryService,
  args: {
    ...ExampleService,
    ...{ service_at_locations: OneVisitableLocation },
  },
};

export const ExampleDirectoryServiceVisitableNoLatLon: Story = {
  ...ExampleDirectoryService,
  args: {
    ...ExampleService,
    ...{ service_at_locations: OneVisitableLocationNoLatLon },
  },
};

export const ExampleDirectoryNoLogo: Story = {
  ...ExampleDirectoryService,
  args: {
    ...ExampleService,
    ...{
      organization: {
        name: 'Example Organization',
        id: 'AAA-BBB-CCC-DDD',
        description: 'The org description',
        logo: '',
        uri: '',
        url: 'https://www.example.com',
      },
    },
  },
};

export const ExampleDirectoryServiceNoContactDetails: Story = {
  ...ExampleDirectoryService,
  args: { ...ExampleService, ...{ email: '', url: '', contacts: [] } },
};
