import React from 'react';
import { StoryFn } from '@storybook/react';
import Panel from './Panel';
import { PanelProps } from './Panel.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Panel',
  component: Panel,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PanelProps> = (args) => (
  <SBPadding>
    <Panel {...args} />
  </SBPadding>
);

export const ExamplePanel = Template.bind({});
ExamplePanel.args = {
  heading: 'Application complete',
  children: <p>Your reference number is ABC123.</p>,
};
