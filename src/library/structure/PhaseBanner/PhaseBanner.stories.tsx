import React from 'react';
import { StoryFn } from '@storybook/react';
import PhaseBanner from './PhaseBanner';
import { PhaseBannerProps } from './PhaseBanner.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import Heading from '../../components/Heading/Heading';

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
  children: <p>We're where it's at</p>,
};

export const PhaseBannerCustomTitleAndTextHomeExample = Template.bind({});
PhaseBannerCustomTitleAndTextHomeExample.args = {
  ...PhaseBannerCustomTitleAndTextExample,
  isHome: true,
};

export const PhaseBannerCustomisedWithHyperlinkExample2 = Template.bind({});
PhaseBannerCustomisedWithHyperlinkExample2.args = {
  isHome: true,
  phaseTitle: 'Beta',
  children: (
    <p>
      You are using our new search experience. We are still refining how this works so you may notice some changes. To
      help us improve it,&nbsp;
      <a href="https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search">
        we would love your feedback
      </a>
    </p>
  ),
};

export const PhaseBannerCustomisedWithHyperlinkExample3 = Template.bind({});
PhaseBannerCustomisedWithHyperlinkExample3.args = {
  phaseTitle: 'Beta',
  children: (
    <p>
      You are using our new search experience. We are still refining how this works so you may notice some changes. To
      help us improve it,&nbsp;
      <a href="https://forms.westnorthants.gov.uk/xfp/form/556?FormName=West%20Northamptonshire%20Website%20Search">
        we would love your feedback
      </a>
    </p>
  ),
};
