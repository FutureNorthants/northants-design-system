import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Meta, StoryObj } from '@storybook/react';
import { CouncilTaxParishPageExample } from './CouncilTaxParishPageExample';

const meta: Meta<typeof CouncilTaxParishPageExample> = {
  title: 'Page Examples/Council Tax By Parish',
  component: CouncilTaxParishPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CouncilTaxParishPageExample>;

export const AlphabeticalList: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
