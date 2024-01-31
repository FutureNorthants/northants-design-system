import React from 'react';
import { StoryFn } from '@storybook/react';
import WestWhiteLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/West White',
  component: WestWhiteLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <div style={{ backgroundColor: 'black' }}>
    <SBPadding>
      <WestWhiteLogo {...args} />
    </SBPadding>
  </div>
);

export const LogoExample = Template.bind({});
