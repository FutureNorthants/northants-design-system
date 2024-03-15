import React from 'react';
import { StoryFn } from '@storybook/react';
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

const Template: StoryFn<DropDownSelectProps> = (args) => (
  <SBPadding>
    <DropDownSelect {...args} />
  </SBPadding>
);

export const ExampleDropDownSelect = Template.bind({});
ExampleDropDownSelect.args = {
  hideLabel: false,
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

export const ExampleDropDownSelectBoldLabel = Template.bind({});
ExampleDropDownSelectBoldLabel.args = {
  hideLabel: false,
  boldLabel: true,
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

export const ExampleDropDownSelectHintText = Template.bind({});
ExampleDropDownSelectHintText.args = {
  hintText: 'Select an option from the list',
  hideLabel: false,
  boldLabel: true,
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
