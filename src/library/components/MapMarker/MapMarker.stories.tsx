import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MapMarker from './MapMarker';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../Map/Map';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/MapMarker',
  component: MapMarker,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

const Template: Story<google.maps.MarkerOptions> = (args) => (
  <SBPadding>
    <Wrapper apiKey={apiKey}>
      <Map zoom={15} center={{ lat: 52.23555414368587, lng: -0.8957390701320571 }}>
        <MapMarker {...args} />
      </Map>
    </Wrapper>
  </SBPadding>
);

export const ExampleGoogleMapMarker = Template.bind({});
ExampleGoogleMapMarker.args = {
  position: { lat: 52.23555414368587, lng: -0.8957390701320571 },
  label: 'A',
  title: 'My map marker',
};

const MultipleMarkerTemplate: Story<google.maps.MarkerOptions> = (args) => (
  <SBPadding>
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
  </SBPadding>
);

export const ExampleGoogleMapMultipleMarker = MultipleMarkerTemplate.bind({});
