import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import GoogleMap from './GoogleMap';
import { GoogleMapProps } from './GoogleMap.types';
import * as storydata from './GoogleMap.storydata';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/GoogleMap',
  component: GoogleMap,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<GoogleMapProps> = (args) => (
  <SBPadding>
    <GoogleMap {...args} />
  </SBPadding>
);

export const GoogleMapWithTitleAndDescription = Template.bind({});
GoogleMapWithTitleAndDescription.args = storydata.GoogleMapWithTitleAndDescription;

export const GoogleMapWithTitleOnly = Template.bind({});
GoogleMapWithTitleOnly.args = storydata.GoogleMapWithTitleOnly;

export const GoogleMapNoTitleOrDescription = Template.bind({});
GoogleMapNoTitleOrDescription.args = storydata.GoogleMapNoTitleOrDescription;

export const GoogleMapWithTitleAndDescriptionDataWithoutCookies = Template.bind({});
GoogleMapWithTitleAndDescriptionDataWithoutCookies.args = storydata.GoogleMapWithTitleAndDescriptionDataWithoutCookies;

export const GoogleMapWithTitleAndDescriptionDataAutodetectCookies = Template.bind({});
GoogleMapWithTitleAndDescriptionDataAutodetectCookies.args =
  storydata.GoogleMapWithTitleAndDescriptionDataAutodetectCookies;
