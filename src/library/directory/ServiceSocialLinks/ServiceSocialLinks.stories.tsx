import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import ServiceSocialLinks from './ServiceSocialLinks';
import { ServiceSocialLinksProps } from './ServiceSocialLinks.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleSocialProfiles } from './ServiceSocialLinks.storydata';
import { MaxWidthContainer, PageMain } from '../../structure/PageStructures';

export default {
  title: 'Library/Directory/ServiceSocialLinks',
  component: ServiceSocialLinks,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ServiceSocialLinksProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <ServiceSocialLinks {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleServiceSocialLinks = Template.bind({});
ExampleServiceSocialLinks.args = ExampleSocialProfiles;
