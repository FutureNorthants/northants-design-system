import React from 'react';
import HeadingWithIcon from './HeadingWithIcon';
import { HeadingWithIconProps } from './HeadingWithIcon.types';
import { Story } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Heading With Icon',
  component: HeadingWithIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<HeadingWithIconProps> = (args) => (
  <SBPadding>
    <HeadingWithIcon {...args} />
  </SBPadding>
);

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  text: 'Heading With Icon 1',
  icon: 'bins',
};

export const H1WithHover = Template.bind({});
H1WithHover.args = {
  level: 1,
  text: 'Heading With Icon & Hover Effect',
  icon: 'bins',
  hasHover: true,
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  text: 'Heading With Icon 2',
  icon: 'counciltax',
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  text: 'Heading With Icon 3',
  icon: 'covid',
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  text: 'Heading With Icon 4',
  icon: 'roads',
};
