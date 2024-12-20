import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WarningTextDisclaimer from './WarningTextDisclaimer';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof WarningTextDisclaimer> = {
  title: 'Library/Slices/WarningTextDisclaimer',
  component: WarningTextDisclaimer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WarningTextDisclaimer>;

export const ExampleWarningTextDisclaimer: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <WarningTextDisclaimer {...args}>
        Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit
        aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet.
      </WarningTextDisclaimer>
    </MaxWidthContainer>
  ),
};
