import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ToggleButtons from './ToggleButtons';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof ToggleButtons> = {
  title: 'Library/Components/Toggle Buttons',
  component: ToggleButtons,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButtons>;

export const ExampleToggleButtons: Story = {
  args: {
    buttons: [
      {
        label: 'Most used',
        ariaLabel: 'View the list in most used order',
        onClick: () => {},
      },
      {
        label: 'Alphabetical',
        ariaLabel: 'View the list in alphabetical order',
        onClick: () => {},
      },
    ],
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ToggleButtons {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
