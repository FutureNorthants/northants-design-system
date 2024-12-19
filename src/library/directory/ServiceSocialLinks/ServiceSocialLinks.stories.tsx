import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ServiceSocialLinks from './ServiceSocialLinks';
import { ExampleSocialProfiles } from './ServiceSocialLinks.storydata';
import { MaxWidthContainer, PageMain } from '../../structure/PageStructures';

const meta: Meta<typeof ServiceSocialLinks> = {
  title: 'Library/Directory/ServiceSocialLinks',
  component: ServiceSocialLinks,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceSocialLinks>;

export const ExampleServiceSocialLinks: Story = {
  args: ExampleSocialProfiles,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ServiceSocialLinks {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
