import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioCheckboxInput from './RadioCheckboxInput';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof RadioCheckboxInput> = {
  title: 'Library/Components/RadioCheckboxInput',
  component: RadioCheckboxInput,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioCheckboxInput>;

/**
 * TODO - the component is a controlled react component so story can
 * be updated in future to demo state change
 */

export const ExampleCheckboxInput: Story = {
  args: {
    label: 'Example',
    singleSelection: false,
    value: 'example',
    name: 'Example item',
    checked: true,
    onChange: () => {},
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <RadioCheckboxInput {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleRadioInput: Story = {
  ...ExampleCheckboxInput,
  args: {
    label: 'Example',
    singleSelection: true,
    value: 'example',
    name: 'Example item',
    checked: true,
  },
};
