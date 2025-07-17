import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import NorthBlackLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/North Black',
  component: NorthBlackLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <div style={{ backgroundColor: 'white' }}>
    <SBPadding>
      <NorthBlackLogo {...args} />
    </SBPadding>
  </div>
);

export const LogoExample = Template.bind({});
