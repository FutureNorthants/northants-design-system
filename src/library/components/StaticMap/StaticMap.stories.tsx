import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import StaticMap from './StaticMap';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof StaticMap> = {
  title: 'Library/Components/StaticMap',
  component: StaticMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof StaticMap>;

export const ExampleStaticMap: Story = {
  args: {
    centre: '52.23555414368587,-0.8957390701320571',
    imageAltText: 'A static google map',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <StaticMap {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleStaticMapWithMarkers: Story = {
  ...ExampleStaticMap,
  args: {
    centre: '52.23555414368587,-0.8957390701320571',
    imageAltText: 'A static google map',
    mapType: 'roadmap',
    mapMarkers: [
      { lat: 52.23555414368587, lng: -0.8957390701320571, label: 'A' },
      { lat: 52.237139432507114, lng: -0.8948307081133049, label: 'B' },
    ],
  },
};

export const ExampleStaticMapSatellite: Story = {
  ...ExampleStaticMap,
  args: {
    centre: '52.23555414368587,-0.8957390701320571',
    imageAltText: 'A static google map',
    mapType: 'satellite',
    zoom: 16,
    mapMarkers: [
      { lat: 52.23555414368587, lng: -0.8957390701320571, size: 'normal', colour: 'blue', label: 'A' },
      { lat: 52.237139432507114, lng: -0.8948307081133049, size: 'mid', colour: 'blue', label: 'B' },
    ],
  },
};
