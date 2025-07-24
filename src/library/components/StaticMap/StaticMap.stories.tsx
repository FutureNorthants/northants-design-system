import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import StaticMap from './StaticMap';
import { StaticMapProps } from './StaticMap.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/StaticMap',
  component: StaticMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<StaticMapProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <StaticMap {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleStaticMap = Template.bind({});
ExampleStaticMap.args = {
  centre: '52.23555414368587,-0.8957390701320571',
  imageAltText: 'A static google map',
};

export const ExampleStaticMapWithMarkers = Template.bind({});
ExampleStaticMapWithMarkers.args = {
  centre: '52.23555414368587,-0.8957390701320571',
  imageAltText: 'A static google map',
  mapType: 'roadmap',
  mapMarkers: [
    { lat: 52.23555414368587, lng: -0.8957390701320571, label: 'A' },
    { lat: 52.237139432507114, lng: -0.8948307081133049, label: 'B' },
  ],
};

export const ExampleStaticMapSatellite = Template.bind({});
ExampleStaticMapSatellite.args = {
  centre: '52.23555414368587,-0.8957390701320571',
  imageAltText: 'A static google map',
  mapType: 'satellite',
  zoom: 16,
  mapMarkers: [
    { lat: 52.23555414368587, lng: -0.8957390701320571, size: 'normal', colour: 'blue', label: 'A' },
    { lat: 52.237139432507114, lng: -0.8948307081133049, size: 'mid', colour: 'blue', label: 'B' },
  ],
};
