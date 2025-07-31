import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Summary from './Summary';
import { SummaryProps } from './Summary.types';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof Summary> = {
  title: 'Library/Structure/Summary',
  component: Summary,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    hasPadding: {
      table: {
        category: 'Styles',
      },
    },
    hasBackground: {
      table: {
        category: 'Styles',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Summary>;

export const ExampleSummary: Story = {
  args: {
    hasBackground: true,
    hasPadding: true,
  },
  render: (args: SummaryProps) => (
    <PageMain>
      <MaxWidthContainer>
        <Summary {...args}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu
            eu leo tincidunt pulvinar.
          </p>
          <p>
            Ut a porttitor elit, nec sollicitudin leo. Praesent volutpat nulla erat, in dictum lorem elementum porta.
          </p>
        </Summary>
      </MaxWidthContainer>
    </PageMain>
  ),
};

export const SummaryWithoutBackground: Story = {
  ...ExampleSummary,
  args: {
    hasBackground: false,
    hasPadding: true,
  },
};

export const SummaryWithoutPadding: Story = {
  ...ExampleSummary,
  args: {
    hasBackground: true,
    hasPadding: false,
  },
};
