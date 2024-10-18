import React from 'react';
import { StoryFn } from '@storybook/react';
import WestBlackLogo from './logo';
import { LogoProps } from './logo.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Logos/West Black',
  component: WestBlackLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<LogoProps> = (args) => (
  <div style={{ backgroundColor: 'white' }}>
    <SBPadding>
      <WestBlackLogo {...args} />
    </SBPadding>
  </div>
);

export const LogoExample = Template.bind({});
