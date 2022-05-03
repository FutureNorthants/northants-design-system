import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ServicesLinksList from './ServicesLinksList';
import { ServicesLinksListProps } from './ServicesLinksList.types';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { ServiceLinksArray, ServiceLinksArrayNoIcons } from './ServicesLinksList.storydata';

export default {
  title: 'library/Structure/Service Links List',
  component: ServicesLinksList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<ServicesLinksListProps> = (args) => (
  <MaxWidthContainer overflowVisible={true}>
    <ServicesLinksList {...args} />
  </MaxWidthContainer>
);

export const ExampleServicesLinksList = Template.bind({});
ExampleServicesLinksList.args = {
  serviceLinksArray: ServiceLinksArray,
};

export const ServicesLinksListWithoutIcons = Template.bind({});
ServicesLinksListWithoutIcons.args = {
  serviceLinksArray: ServiceLinksArrayNoIcons,
};

export const ExampleServicesLinksListWithCard = Template.bind({});
ExampleServicesLinksListWithCard.args = {
  serviceLinksArray: ServiceLinksArray,
  hasBackground: true,
  hideHeader: true,
  oneCol: true,
};

export const ServicesLinksBoxed = Template.bind({});
ServicesLinksBoxed.args = {
  serviceLinksArray: ServiceLinksArray,
  isBoxed: true,
};
