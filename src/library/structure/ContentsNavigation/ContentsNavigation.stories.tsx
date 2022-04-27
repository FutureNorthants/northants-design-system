import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ContentsNavigation from './ContentsNavigation';
import { ContentsProps } from '../Contents/Contents.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ContentsArray } from '../Contents/Contents.storydata';

export default {
  title: 'Library/Structure/Contents Navigation',
  component: ContentsNavigation,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<ContentsProps> = (args) => (
  <SBPadding>
    <ContentsNavigation {...args} />
  </SBPadding>
);

export const ExampleContentsNavigation = Template.bind({});
ExampleContentsNavigation.args = {
  contents: ContentsArray,
  currentPath: '/second-page',
};

export const ExampleContentsNavigationFirstPage = Template.bind({});
ExampleContentsNavigationFirstPage.args = {
  contents: ContentsArray,
  currentPath: '/first-page',
};

export const ExampleContentsNavigationLastPage = Template.bind({});
ExampleContentsNavigationLastPage.args = {
  contents: ContentsArray,
  currentPath: '/fourth-page',
};
