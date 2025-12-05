import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BudgetGame from './BudgetGame';
import { ExampleBudgetGameProps } from './BudgetGame.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof BudgetGame> = {
  title: 'Library/Slices/Budget Game',
  component: BudgetGame,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BudgetGame>;

export const ExampleBudgetGame: Story = {
  args: ExampleBudgetGameProps,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <BudgetGame {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
