import React from 'react';
import { StoryFn } from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import { DividerProps } from './Divider.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

const meta: Meta<typeof Divider> = {
  title: 'Library/Slices/Divider',
  component: Divider,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const ExampleDivider: Story = {};
