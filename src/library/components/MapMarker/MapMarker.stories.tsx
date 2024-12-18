import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MapMarker from './MapMarker';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../Map/Map';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof MapMarker> = {
  title: 'Library/Components/MapMarker',
  component: MapMarker,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof MapMarker>;

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

export const ExampleGoogleMapMarker: Story = {
  args: {
    position: { lat: 52.23555414368587, lng: -0.8957390701320571 },
    label: 'A',
    title: 'My map marker',
  },
  render: (args) => (
    <Wrapper apiKey={apiKey}>
      <Map zoom={15} center={{ lat: 52.23555414368587, lng: -0.8957390701320571 }}>
        <MapMarker {...args} />
      </Map>
    </Wrapper>
  ),
};

export const ExampleGoogleMapMultipleMarker: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <Wrapper apiKey={apiKey}>
          <Map zoom={15} center={{ lat: 52.23555414368587, lng: -0.8957390701320571 }}>
            <MapMarker
              {...{
                position: { lat: 52.23555414368587, lng: -0.8957390701320571 },
                label: 'A',
                title: 'One Angel Square',
              }}
            />
            <MapMarker
              {...{
                position: { lat: 52.237139432507114, lng: -0.8948307081133049 },
                label: 'B',
                title: 'The Guildhall',
              }}
            />
          </Map>
        </Wrapper>
      </PageMain>
    </MaxWidthContainer>
  ),
};
