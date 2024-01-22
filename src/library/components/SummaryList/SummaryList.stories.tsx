import React from 'react';
import { StoryFn } from '@storybook/react';
import SummaryList from './SummaryList';
import { SummaryListProps } from './SummaryList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { MaxWidthContainer, PageMain } from '../../..';

export default {
  title: 'Library/Components/SummaryList',
  component: SummaryList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SummaryListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <SummaryList {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleSummaryList = Template.bind({});
ExampleSummaryList.args = {
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
};
