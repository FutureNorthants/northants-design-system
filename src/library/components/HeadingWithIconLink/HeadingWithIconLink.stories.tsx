import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { HeadingWithIconLinkProps } from './HeadingWithIconLink.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import HeadingWithIconLink from './HeadingWithIconLink';

export default {
  title: 'Library/Components/Heading with Icon Link',
  component: HeadingWithIconLink,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<HeadingWithIconLinkProps> = (args) => (
  <SBPadding>
    <HeadingWithIconLink {...args} />
  </SBPadding>
);

export const ExampleIconWithHeading = Template.bind({});
ExampleIconWithHeading.args = {
  iconKey: 'adults',
  link: '#',
  title: 'Adults',
};

export const ExampleWithoutIcon = Template.bind({});
ExampleWithoutIcon.args = {
  iconKey: null,
  link: '#',
  title: 'Adults',
};

export const ExampleWithIconAndLongHeading = Template.bind({});
ExampleWithIconAndLongHeading.args = {
  iconKey: 'births',
  link: '#',
  title: 'Births, deaths, marriages and civil partnerships',
};
