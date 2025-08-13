import React from 'react';
import Input from './Input';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof Input> = {
  title: 'Library/Components/Input',
  component: Input,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'exampleInput',
    placeholder: 'Enter some text',
    id: 'ExampleTextarea',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <Input {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleWithDefaultValue: Story = {
  ...Example,
  args: {
    ...Example.args,
    defaultValue: 'Some default text',
  },
};

export const ExampleFullWidth: Story = {
  ...Example,
  args: {
    ...Example.args,
    isFullWidth: true,
  },
};

export const ExampleHasError: Story = {
  ...Example,
  args: {
    ...Example.args,
    isErrored: true,
    errorText: 'The field example textarea is required.',
  },
};

export const ExampleDateInput: Story = {
  ...Example,
  args: {
    name: 'exampleDateBox',
    placeholder: 'Select a Date',
    id: 'ExampleDataBox',
    type: 'date',
    minValue: new Date().toISOString().substring(0, 10),
  },
};
