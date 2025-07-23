import React from 'react';
import { StoryFn } from '@storybook/react';
import PhaseBanner from './PhaseBanner';
import { PhaseBannerProps } from './PhaseBanner.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'library/Structure/Phase Banner',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PhaseBannerProps> = (args) => <PhaseBanner {...args} />;

export const PhaseBannerExampleWithDefaults = Template.bind({});

export const PhaseBannerHomeExampleWithDefaults = Template.bind({});
PhaseBannerHomeExampleWithDefaults.args = {
  isHome: true,
};

export const PhaseBannerCustomTitleAndTextExample = Template.bind({});
PhaseBannerCustomTitleAndTextExample.args = {
  ...PhaseBannerExampleWithDefaults,
  phaseTitle: 'Our trendy new website',
  phaseText: "We're where it's at",
};

export const PhaseBannerCustomTitleAndTextHomeExample = Template.bind({});
PhaseBannerCustomTitleAndTextHomeExample.args = {
  ...PhaseBannerCustomTitleAndTextExample,
  isHome: true,
};

export const PhaseBannerCustomisedWithHyperlinkExample = Template.bind({});
PhaseBannerCustomisedWithHyperlinkExample.args = {
  phaseTitle: 'New search',
  phaseText: 'Let us know what you think!',
  phaseLink: '#',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample.args = {
  isHome: true,
  phaseTitle: 'New search technology',
  phaseText: 'Click here to let us know what you think!',
  phaseLink: '#',
};
