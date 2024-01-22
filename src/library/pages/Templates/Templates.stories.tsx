import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Templates, TemplatesProps } from './Templates';

export default {
  title: 'Page Examples/Templates',
  component: Templates,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<TemplatesProps> = (args) => <Templates {...args} />;

export const SingleColTemplate = Template.bind({});
SingleColTemplate.args = { type: 'singleCol' };

export const TwoColTemplate = Template.bind({});
TwoColTemplate.args = { type: 'twoCol' };

export const TwoColLeftTemplate = Template.bind({});
TwoColLeftTemplate.args = { type: 'twoColLeft' };

export const TwoColLeftWithHeaderTemplate = Template.bind({});
TwoColLeftWithHeaderTemplate.args = { type: 'twoColLeftHeader' };
