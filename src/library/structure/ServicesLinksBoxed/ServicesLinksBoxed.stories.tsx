import React from 'react';
import { StoryFn } from '@storybook/react';
import ServiceLinksBoxed from './ServicesLinksBoxed';
import { ServiceLinksBoxedProps } from './ServicesLinksBoxed.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { serviceLinksArray } from './ServicesLinksBoxed.storydata';

export default {
  title: 'Library/Structure/Services Links Boxed',
  component: ServiceLinksBoxed,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ServiceLinksBoxedProps> = (args) => (
  <SBPadding>
    <ServiceLinksBoxed {...args} />
  </SBPadding>
);

export const ExampleServiceLinksBoxed = Template.bind({});
ExampleServiceLinksBoxed.args = {
  serviceLinksArray: serviceLinksArray,
};
