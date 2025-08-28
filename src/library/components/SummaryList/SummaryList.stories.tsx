import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

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

export const SummaryListWithHeading: Story = {
  ...ExampleSummaryList,
  args: {
    ...ExampleSummaryList.args,
    heading: 'Example heading text',
  },
};

export const SummaryListNoMargin: Story = {
  ...ExampleSummaryList,
  args: {
    ...ExampleSummaryList.args,
    hasMargin: false,
  },
};

export const SummaryListNoBorders: Story = {
  ...ExampleSummaryList,
  args: {
    ...ExampleSummaryList.args,
    hasBorders: false,
  },
};
