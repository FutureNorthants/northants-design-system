import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import DynamicIcon from './DynamicIcon';
import { DynamicIconProps } from './DynamicIcon.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Dynamic Icon',
  component: DynamicIcon,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DynamicIconProps> = (args) => (
  <SBPadding>
    <DynamicIcon {...args} />
  </SBPadding>
);

export const BusDynamicIcon = Template.bind({});
BusDynamicIcon.args = {
  level: 2,
  icon: 'bus',
};

export const BenefitsDynamicIcon = Template.bind({});
BenefitsDynamicIcon.args = {
  level: 1,
  icon: 'benefits',
};
