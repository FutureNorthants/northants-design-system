import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ServiceLinksBoxed from './ServiceLinksBoxed';
import { ServiceLinksBoxedProps } from './ServiceLinksBoxed.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { serviceLinksArray } from './ServiceLinksBoxed.storydata';

export default {
  title: 'Library/Structure/Service Links Boxed',
  component: ServiceLinksBoxed,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<ServiceLinksBoxedProps> = (args) => (
  <SBPadding>
    <ServiceLinksBoxed {...args} />
  </SBPadding>
);

export const ExampleServiceLinksBoxed = Template.bind({});
ExampleServiceLinksBoxed.args = {
  serviceLinksArray: serviceLinksArray,
};
