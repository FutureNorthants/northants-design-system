import React from 'react';
import Textarea from './Textarea';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleSortBy } from '../SortBy/SortBy.stories';

const meta: Meta<typeof Textarea> = {
  title: 'Library/Components/Textarea',
  component: Textarea,
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
        <Textarea {...args} />
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
