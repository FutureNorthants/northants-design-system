import React from 'react';
import { StoryFn } from '@storybook/react';
import AccessibleLinks from './AccessibleLinks';
import { AccessibleLinkProps } from './AccessibleLinks.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Accessible links',
  component: AccessibleLinks,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<AccessibleLinkProps> = (args) => (
  <SBPadding>
    <AccessibleLinks {...args} />
  </SBPadding>
);

export const ExampleAccessibleLinks = Template.bind({});
ExampleAccessibleLinks.args = {
  AccessibleLinksArray: [
    {
      title: 'Skip to Accessibility Statement',
      url: '/accessibility-statement',
      isExternal: false,
    },
    {
      title: 'Skip to website feedback form',
      url: '/web-feedback',
      isExternal: true,
    },
  ],
};
