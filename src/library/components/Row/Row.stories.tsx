import React from 'react';
import { StoryFn } from '@storybook/react';
import Row from './Row';
import { RowProps } from './Row.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Row',
  component: Row,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<RowProps> = (args) => (
  <SBPadding>
    <Row {...args}>Some content</Row>
  </SBPadding>
);

export const ExampleRow = Template.bind({});
ExampleRow.args = {};

export const ExampleRowList = Template.bind({});
ExampleRowList.args = {
  isList: true,
};
