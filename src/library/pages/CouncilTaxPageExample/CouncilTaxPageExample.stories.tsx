import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Meta, StoryObj } from '@storybook/react';

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
type Story = StoryObj<typeof CouncilTaxPageExample>;

export const AddressDropdown: Story = {
  args: {
    version: 'b',
  },
  parameters: {
    pageLayout: 'page',
  },
};
