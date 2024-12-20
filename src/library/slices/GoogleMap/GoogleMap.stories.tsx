import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GoogleMap from './GoogleMap';
import * as storydata from './GoogleMap.storydata';

const meta: Meta<typeof GoogleMap> = {
  title: 'Library/Slices/GoogleMap',
  component: GoogleMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof GoogleMap>;

export const GoogleMapWithTitleAndDescription: Story = {
  args: storydata.GoogleMapWithTitleAndDescription,
};

export const GoogleMapWithTitleOnly: Story = {
  args: storydata.GoogleMapWithTitleOnly,
};

export const GoogleMapNoTitleOrDescription: Story = {
  args: storydata.GoogleMapNoTitleOrDescription,
};

export const GoogleMapWithTitleAndDescriptionDataWithoutCookies: Story = {
  args: storydata.GoogleMapWithTitleAndDescriptionDataWithoutCookies,
};

export const GoogleMapWithTitleAndDescriptionDataAutodetectCookies: Story = {
  args: storydata.GoogleMapWithTitleAndDescriptionDataAutodetectCookies,
};

export const GoogleMapWithInvalidLinks: Story = {
  args: storydata.GoogleMapWithInvalidLinks,
};

export const GoogleMapWithUpdatedLink: Story = {
  args: storydata.GoogleMapWithUpdatedLinkFormat,
};
