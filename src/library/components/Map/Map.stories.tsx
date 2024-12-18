import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Map from './Map';
import { Wrapper } from '@googlemaps/react-wrapper';

const meta: Meta<typeof Map> = {
  title: 'Library/Components/Map',
  component: Map,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Map>;

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

export const ExampleGoogleMap: Story = {
  args: {
    center: { lat: 52.23555414368587, lng: -0.8957390701320571 },
    zoom: 10,
  },
  render: (args) => (
    <Wrapper apiKey={apiKey}>
      <Map {...args} />
    </Wrapper>
  ),
};
