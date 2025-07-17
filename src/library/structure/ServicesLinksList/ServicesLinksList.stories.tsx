import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ServicesLinksList from './ServicesLinksList';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { ServiceLinksArray, ServiceLinksArrayNoIcons } from './ServicesLinksList.storydata';

const meta: Meta<typeof ServicesLinksList> = {
  title: 'library/Structure/Service Links List',
  component: ServicesLinksList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServicesLinksList>;

export const ExampleServicesLinksList: Story = {
  args: {
    serviceLinksArray: ServiceLinksArray,
  },
  render: (args) => (
    <MaxWidthContainer overflowVisible={true}>
      <ServicesLinksList {...args} />
    </MaxWidthContainer>
  ),
};

export const ServicesLinksListWithoutIcons: Story = {
  ...ExampleServicesLinksList,
  args: {
    serviceLinksArray: ServiceLinksArrayNoIcons,
  },
};

export const ExampleServicesLinksListWithCard: Story = {
  ...ExampleServicesLinksList,
  args: {
    serviceLinksArray: ServiceLinksArray,
    hasBackground: true,
    hideHeader: true,
    oneCol: true,
  },
};

export const ServicesLinksBoxed: Story = {
  ...ExampleServicesLinksList,
  args: {
    serviceLinksArray: ServiceLinksArray,
    isBoxed: true,
  },
};
