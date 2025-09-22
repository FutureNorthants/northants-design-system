import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import ServiceLinksBoxed from './ServicesLinksBoxed';
import { serviceLinksArray } from './ServicesLinksBoxed.storydata';

const meta: Meta<typeof ServiceLinksBoxed> = {
  title: 'Library/Structure/Services Links Boxed',
  component: ServiceLinksBoxed,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleServiceLinksBoxed: Story = {
  args: {
    serviceLinksArray: serviceLinksArray,
  },
};
