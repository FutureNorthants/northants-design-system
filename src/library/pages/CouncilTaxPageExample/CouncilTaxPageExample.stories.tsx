import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';

import { CouncilTaxPageExample } from './CouncilTaxPageExample';

const meta: Meta<typeof CouncilTaxPageExample> = {
  title: 'Page Examples/Council Tax By Address',
  component: CouncilTaxPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AddressDropdown: Story = {
  args: {
    version: 'b',
  },
  parameters: {
    pageLayout: 'page',
  },
};
