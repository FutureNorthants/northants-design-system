import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import NorthColouredLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/North Coloured',
  component: NorthColouredLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <SBPadding>
    <NorthColouredLogo {...args} />
  </SBPadding>
);

export const LogoExample = Template.bind({});
