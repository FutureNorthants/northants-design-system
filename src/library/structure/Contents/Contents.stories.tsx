import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Contents from './Contents';
import { ContentsProps } from './Contents.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ContentsArray } from './Contents.storydata';

export default {
  title: 'Library/Structure/Contents',
  component: Contents,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<ContentsProps> = (args) => (
  <SBPadding>
    <Contents {...args} />
  </SBPadding>
);

export const ExampleContents = Template.bind({});
ExampleContents.args = {
  currentPath: '/first-page',
  contents: ContentsArray,
};

export const ExampleContentsWithSecondPageCurrent = Template.bind({});
ExampleContentsWithSecondPageCurrent.args = {
  currentPath: '/second-page',
  contents: ContentsArray,
};

export const ExampleContentsWithCustomTitle = Template.bind({});
ExampleContentsWithCustomTitle.args = {
  currentPath: '/first-page',
  contents: ContentsArray,
  title: 'Contents on this page',
};
