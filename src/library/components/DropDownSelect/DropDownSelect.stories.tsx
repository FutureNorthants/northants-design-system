import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropDownSelect from './DropDownSelect';
import { NewsArticleFilters } from '../../structure/NewsArticleList/NewsArticleData';

const meta: Meta<typeof DropDownSelect> = {
  title: 'Library/Components/Drop Down Select',
  component: DropDownSelect,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropDownSelect>;

export const ExampleDropDownSelect: Story = {
  args: {
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
  },
};

export const ExampleDropDownFakeData: Story = {
  ...ExampleDropDownSelect,
  args: {
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
  },
};

export const ExampleDropDownSelectHiddenLabel: Story = {
  ...ExampleDropDownSelect,
  args: {
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
  },
};
