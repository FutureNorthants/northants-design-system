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
  phaseText: ['Let us know what you think!'],
  phaseLink: '#',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample.args = {
  isHome: true,
  phaseTitle: 'New search technology',
  phaseText: ['Click here to let us know what you think!'],
  phaseLink: '#',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample2 = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample2.args = {
  phaseTitle: 'New search',
  phaseText: [
    'You are using our new search experience. We are still refining how this works so you may notice some changes. To help us improve it, we would love your feedback.',
  ],
  phaseLink: 'https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample3 = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample3.args = {
  phaseTitle: 'New search',
  phaseText: [
    'You are using our new search experience. We are still refining how this works so you may notice some changes. To help us improve it, we would love your feedback.',
    'Click here to let us know what you think!',
  ],
  phaseLink: 'https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample4 = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample4.args = {
  isHome: true,
  phaseTitle: 'New search',
  phaseText: [
    'You are using our new search experience. We are still refining how this works so you may notice some changes. To help us improve it, we would love your feedback.',
    'Click here to let us know what you think!',
  ],
  phaseLink: 'https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample5 = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample5.args = {
  phaseTitle: 'New search',
  phaseText: [
    'You are using our new search experience.',
    'We are still refining how this works so you may notice some changes. To help us improve it, we would love your feedback.',
    'Click here to let us know what you think!',
  ],
  phaseLink: 'https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search',
};

export const PhaseBannerCustomisedHomeWithHyperlinkHomeExample6 = Template.bind({});
PhaseBannerCustomisedHomeWithHyperlinkHomeExample6.args = {
  phaseTitle: 'New search',
  phaseText: [
    'You are using our new search experience.',
    'We are still refining how this works so you may notice some changes. To help us improve it, we would love your feedback.',
    'Click here to let us know what you think!',
  ],
  phaseLink: 'https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search',
  isHome: true,
};
