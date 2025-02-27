import React from 'react';
import { StoryFn, Meta } from '@storybook/react/';
import { TabbedPageExample } from './TabbedPageExample';
import { TabbedPageExampleProps } from './TabbedPageExample.types';

export default {
  title: 'Page Examples/Tabbed Page example',
  component: TabbedPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<TabbedPageExampleProps> = (args) => <TabbedPageExample {...args} />;

export const ExampleTabbedPageExample = Template.bind({});
ExampleTabbedPageExample.args = {};

/*
export const ExampleTabbedPageExample2 = Template.bind({});
ExampleTabbedPageExample2.args = {};
*/
