import React from 'react';
import { StoryFn } from '@storybook/react';
import DirectoryMap from './DirectoryMap';
import { DirectoryMapProps } from './DirectoryMap.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Directory/DirectoryMap',
  component: DirectoryMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DirectoryMapProps> = (args) => (
  <SBPadding>
    <DirectoryMap {...args} />
  </SBPadding>
);

export const ExampleDirectoryMap = Template.bind({});
ExampleDirectoryMap.args = {
  allowCookies: true,
  mapProps: {
    centre: '52.23555414368587,-0.8957390701320571',
    imageAltText: 'A static google map',
    mapType: 'roadmap',
    mapMarkers: [
      { lat: 52.23555414368587, lng: -0.8957390701320571, label: 'A', title: 'One Angel Square' },
      { lat: 52.237139432507114, lng: -0.8948307081133049, label: 'B', title: 'The Guildhall' },
    ],
  },
};

export const ExampleDirectoryMapWithoutCookies = Template.bind({});
ExampleDirectoryMapWithoutCookies.args = {
  allowCookies: false,
  mapProps: {
    centre: '52.23555414368587,-0.8957390701320571',
    imageAltText: 'A static google map',
    mapType: 'roadmap',
    mapMarkers: [
      { lat: 52.23555414368587, lng: -0.8957390701320571, label: 'A', title: 'One Angel Square' },
      { lat: 52.237139432507114, lng: -0.8948307081133049, label: 'B', title: 'The Guildhall' },
    ],
  },
};
