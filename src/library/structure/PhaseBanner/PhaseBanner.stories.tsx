import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import PhaseBanner from './PhaseBanner';
import { PhaseBannerProps } from './PhaseBanner.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'library/Structure/Phase Banner',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PhaseBannerProps> = (args) => <PhaseBanner {...args} />;

export const PhaseBannerExample = Template.bind({});

export const PhaseBannerHomeExample = Template.bind({});
PhaseBannerHomeExample.args = {
  isHome: true,
};
