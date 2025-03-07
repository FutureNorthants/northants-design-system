import React from 'react';
import { StoryFn } from '@storybook/react';
import RoadworksList from './RoadworksList';
import { RoadworksListProps } from './RoadworksList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { AnotherExampleRoadwork, ExampleRoadwork, ThirdExampleRoadwork } from './RoadworksList.storydata';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Slices/RoadworksList',
  component: RoadworksList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<RoadworksListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <RoadworksList {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleRoadworksList = Template.bind({});
ExampleRoadworksList.args = {
  roadworks: [ExampleRoadwork, AnotherExampleRoadwork, ThirdExampleRoadwork],
};
