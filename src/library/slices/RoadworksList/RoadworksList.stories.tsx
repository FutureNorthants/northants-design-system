import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RoadworksList from './RoadworksList';
import { AnotherExampleRoadwork, ExampleRoadwork, ThirdExampleRoadwork } from './RoadworksList.storydata';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof RoadworksList> = {
  title: 'Library/Slices/RoadworksList',
  component: RoadworksList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleRoadWorksList: Story = {
  args: {
    title: 'Current roadworks',
    roadworks: [ExampleRoadwork, AnotherExampleRoadwork, ThirdExampleRoadwork],
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <RoadworksList {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const RoadworksListNoResults: Story = {
  ...ExampleRoadWorksList,
  args: {
    title: 'Current roadworks',
    roadworks: [],
  },
};
