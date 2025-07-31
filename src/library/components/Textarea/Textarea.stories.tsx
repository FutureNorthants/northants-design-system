import React from 'react';
import Textarea from './Textarea';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

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
type Story = StoryObj<typeof Textarea>;

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
    name: 'exampleInput',
    placeholder: 'Enter some text',
    id: 'ExampleTextarea',
    defaultValue: 'Some default text',
  },
};

export const ExampleFullWidth: Story = {
  ...Example,
  args: {
    name: 'exampleInput',
    placeholder: 'Enter some text',
    id: 'ExampleTextarea',
    isFullWidth: true,
  },
};

export const ExampleHasError: Story = {
  ...Example,
  args: {
    name: 'exampleInput',
    placeholder: 'Enter some text',
    id: 'ExampleTextarea',
    isErrored: true,
    errorText: 'The field example textarea is required.',
    isFullWidth: true,
  },
};
