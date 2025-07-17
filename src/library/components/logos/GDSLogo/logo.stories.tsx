import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import GDSLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/GDS Logo',
  component: GDSLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <SBPadding>
    <GDSLogo {...args} />
  </SBPadding>
);

export const LogoExample = Template.bind({});
