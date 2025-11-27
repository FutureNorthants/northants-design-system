import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LocationLookup from './LocationLookup';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import Divider from '../../slices/Divider/Divider';

const meta: Meta<typeof LocationLookup> = {
  title: 'Library/Components/Location Lookup',
  component: LocationLookup,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocationLookup>;

export const ExampleLocationLookup: Story = {
  args: {
    title: 'Location lookup',
  },
  render: (args) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    return (
      <>
        <MaxWidthContainer>
          <PageMain>
            <LocationLookup
              {...args}
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
            />
          </PageMain>
        </MaxWidthContainer>
        <Divider />
        <p>Results of the lookup will be displayed below:</p>
        <ul>
          <li>Latitude is {latitude}</li>
          <li>Longitude is {longitude}</li>
        </ul>
      </>
    );
  },
};

export const ExampleLocationLookupNoTitle: Story = {
  ...ExampleLocationLookup,
  args: {},
};
