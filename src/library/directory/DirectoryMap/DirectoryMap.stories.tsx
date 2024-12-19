import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryMap from './DirectoryMap';

const meta: Meta<typeof DirectoryMap> = {
  title: 'Library/Directory/DirectoryMap',
  component: DirectoryMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryMap>;

export const ExampleDirectoryMap: Story = {
  args: {
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
  },
};

export const ExampleDirectoryMapWithoutCookies: Story = {
  args: {
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
  },
};
