import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DropDownSelect from './DropDownSelect';
import { DropDownSelectProps } from './DropDownSelect.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

import { NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';

export default {
  title: 'Library/Components/Drop Down Select',
  component: DropDownSelect,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DropDownSelectProps> = (args) => (
  <SBPadding>
    <DropDownSelect {...args} />
  </SBPadding>
);

export const ExampleDropDownSelect = Template.bind({});
ExampleDropDownSelect.args = {
  options: [
    {
      title: 'All services',
      value: 'all-services',
    },
    {
      title: 'Bins',
      value: 'bins',
    },
    {
      title: 'Council Tax',
      value: 'council-tax',
    },
  ],
  selected: NewsArticleFilters.services,
};

export const ExampleDropDownFakeData = Template.bind({});
ExampleDropDownFakeData.args = {
  options: [
    {
      title: 'Click me to see nonsense',
      value: '0',
    },
    {
      title: 'Foo',
      value: '1',
    },
    {
      title: 'Bar',
      value: '2',
    },
    {
      title: 'Hello',
      value: '3',
    },
    {
      title: 'World',
      value: '4',
    },
    {
      title: 'Lorem',
      value: '5',
    },
    {
      title: 'Ipsum',
      value: '6',
    },
  ],
  selected: NewsArticleFilters.services,
};

export const ExampleDropDownSelectHiddenLabel = Template.bind({});
ExampleDropDownSelectHiddenLabel.args = {
  hideLabel: true,
  label: 'Services',
  options: [
    {
      title: 'All services',
      value: 'all-services',
    },
    {
      title: 'Bins',
      value: 'bins',
    },
    {
      title: 'Council Tax',
      value: 'council-tax',
    },
  ],
  selected: NewsArticleFilters.services,
};
