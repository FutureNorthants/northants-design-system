import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Map from './Map';
import { MapProps } from './Map.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { Wrapper } from '@googlemaps/react-wrapper';

export default {
  title: 'Library/Components/Map',
  component: Map,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

const Template: StoryFn<MapProps> = (args) => (
  <SBPadding>
    <Wrapper apiKey={apiKey}>
      <Map {...args} />
    </Wrapper>
  </SBPadding>
);

export const ExampleGoogleMap = Template.bind({});
ExampleGoogleMap.args = {
  center: { lat: 52.23555414368587, lng: -0.8957390701320571 },
  zoom: 10,
};
