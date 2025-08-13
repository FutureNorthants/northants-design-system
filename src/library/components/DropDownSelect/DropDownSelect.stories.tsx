import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import DropDownSelect from './DropDownSelect';

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
type Story = StoryObj<typeof meta>;

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
  },
};

export const ExampleDropDownSelectWithLabel: Story = {
  ...ExampleDropDownSelect,
  args: {
    label: 'Services',
    ...ExampleDropDownSelect.args,
  },
};

export const ExampleDropDownSelectWithLabelHidden: Story = {
  ...ExampleDropDownSelectWithLabel,
  args: {
    ...ExampleDropDownSelectWithLabel.args,
    hideLabel: true,
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
  },
};
