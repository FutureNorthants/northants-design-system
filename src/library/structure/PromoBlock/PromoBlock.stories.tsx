import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromoBlock from './PromoBlock';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { PromoBlocksData } from './PromoBlock.storydata';

const meta: Meta<typeof PromoBlock> = {
  title: 'Library/Structure/Promo Block',
  component: PromoBlock,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    promos: {
      table: { category: 'Tiles' },
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromoBlock>;

/**
 * Very simple selection of stories for this structure just showing it handles varying numbers of promo tiles;
 * design decision has been that there will almost always be 3 each taking up a third of the screen width, 2 or
 * 1 should degrade to max 50% width. All full width on mobile.
 */

export const Example3Promos: Story = {
  args: {
    promos: PromoBlocksData.slice(0, 3),
  },
  render: (args) => (
    <MaxWidthContainer>
      <PromoBlock {...args} />
    </MaxWidthContainer>
  ),
};

export const Example2Promos: Story = {
  ...Example3Promos,
  args: {
    promos: PromoBlocksData.slice(0, 2),
  },
};

export const Example1Promo: Story = {
  ...Example3Promos,
  args: {
    promos: PromoBlocksData.slice(0, 1),
  },
};

export const ExampleNoPromos: Story = {
  ...Example3Promos,
  args: {
    promos: [],
  },
};
