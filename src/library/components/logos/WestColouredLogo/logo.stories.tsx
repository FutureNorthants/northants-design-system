import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import WestColouredLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/West Coloured',
  component: WestColouredLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <SBPadding>
    <WestColouredLogo {...args} />
  </SBPadding>
);

export const LogoExample = Template.bind({});
