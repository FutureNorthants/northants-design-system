import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SummaryList from './SummaryList';
import { MaxWidthContainer, PageMain } from '../../..';

const meta: Meta<typeof SummaryList> = {
  title: 'Library/Components/SummaryList',
  component: SummaryList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SummaryList>;

export const ExampleSummaryList: Story = {
  args: {
    terms: [
      {
        term: 'Name',
        detail: 'John Smith',
      },
      {
        term: 'Title',
        detail: 'Senior Manager',
      },
      {
        term: 'Long Text',
        detail: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu
          eu leo tincidunt pulvinar.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu
          eu leo tincidunt pulvinar.
        </p>`,
      },
    ],
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <SummaryList {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
