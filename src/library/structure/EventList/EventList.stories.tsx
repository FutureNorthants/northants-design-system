import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import EventList from './EventList';
import { EventListProps } from './EventList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleEventListResults } from './EventList.storydata';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

export default {
  title: 'Library/Structure/Event List',
  component: EventList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<EventListProps> = (args) => {
  const [eventSearch, setEventSearch] = useState('');
  return (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <EventList {...args} eventSearch={eventSearch} setEventSearch={setEventSearch} />
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExampleEventList = Template.bind({});
ExampleEventList.args = ExampleEventListResults;

export const ExampleEventListNoResults = Template.bind({});
ExampleEventListNoResults.args = {
  results: [],
};
