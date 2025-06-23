import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EventList from './EventList';
import { ExampleEventListResults } from './EventList.storydata';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

const meta: Meta<typeof EventList> = {
  title: 'Library/Structure/Event List',
  component: EventList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventList>;

export const ExampleEventList: Story = {
  args: ExampleEventListResults,
  render: (args) => {
    const [eventSearch, setEventSearch] = useState('');
    return (
      <MaxWidthContainer>
        <PageMain>
          <EventList {...args} eventSearch={eventSearch} setEventSearch={setEventSearch} />
        </PageMain>
      </MaxWidthContainer>
    );
  },
};

export const ExampleEventListNoResults: Story = {
  ...ExampleEventList,
  args: {
    results: [],
  },
};

export const ExampleEventListWithDefaults: Story = {
  ...ExampleEventList,
  args: undefined,
};
