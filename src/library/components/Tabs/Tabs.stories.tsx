import React from 'react';
import { StoryFn } from '@storybook/react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

import ServiceIcon from '../icons/FacebookIcon/Icon';

import { tabNames, tabHTMLContents, tabNames2, tabHTMLContents2 } from './Tabs.storydata';

export default {
  title: 'Library/Components/Tabs',
  component: Tabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

/*
const tabNames: string[] = ['first', 'second', 'third', 'fourth'];
const tabHTMLContents: React.ReactNode[] = [
  '<p style="font-family:arial; font-size:35pt"><strong>Hello World (1) !</strong></p>',
  '<p style="font-family:calibri; font-size:35pt"><strong>Hello World (2) !</strong></p>',
  '<p style="font-family:webdings; font-size:35pt"><strong>Hello World (3) !</strong></p>',
  '<SBPadding><ChevronIcon colourFill="#333" direction="down"/></SBPadding>',
];
*/

const Template: StoryFn<TabsProps> = (args) => (
  <SBPadding>
    <Tabs {...args} />
  </SBPadding>
);

export const ExampleTabs = Template.bind({});
ExampleTabs.args = {
  tabNames: tabNames,
  children: tabHTMLContents,
};

export const AnotherExampleTabs = Template.bind({});
AnotherExampleTabs.args = {
  tabNames: tabNames2,
  children: tabHTMLContents2,
};
