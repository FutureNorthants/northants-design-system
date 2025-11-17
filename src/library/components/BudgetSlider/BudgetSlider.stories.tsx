import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BudgetSlider from './BudgetSlider';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof BudgetSlider> = {
  title: 'Library/Components/Budget Slider',
  component: BudgetSlider,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BudgetSlider>;

export const ExampleBudgetSlider: Story = {
  args: {
    title: 'Bins & Recycling',
    summary: 'Weekly bin collections, recycling services, and waste management',
    icon: 'bins',
    min: 10,
    max: 20,
    initialValue: 12,
    impacts: [
      {
        title: 'low',
        min: 10,
        max: 14,
        summary: 'The low impact summary text',
      },
      {
        title: 'medium',
        min: 15,
        max: 16,
        summary: 'The medium impact summary text',
      },
      {
        title: 'high',
        min: 17,
        max: 20,
        summary: 'The high impact summary text',
      },
    ],
  },
  render: (args) => {
    return (
      <MaxWidthContainer>
        <PageMain>
          <BudgetSlider {...args} />
        </PageMain>
      </MaxWidthContainer>
    );
  },
};
