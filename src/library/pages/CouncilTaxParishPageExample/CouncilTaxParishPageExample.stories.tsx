import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const AlphabeticalList: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
