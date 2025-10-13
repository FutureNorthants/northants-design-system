import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PhaseBanner from './PhaseBanner';

const meta: Meta<typeof PhaseBanner> = {
  title: 'library/Structure/Phase Banner',
  component: PhaseBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PhaseBannerExampleWithDefaults: Story = {};

export const PhaseBannerHomeExampleWithDefaults: Story = {
  args: { isHome: true },
};

export const PhaseBannerCustomTitleAndTextExample: Story = {
  args: {
    phaseTitle: 'Our trendy new website',
    children: <p>We're where it's at</p>,
  },
};

export const PhaseBannerCustomTitleAndTextHomeExample: Story = {
  args: { ...PhaseBannerCustomTitleAndTextExample.args, isHome: true },
};

export const PhaseBannerCustomisedWithHyperlinkExample2: Story = {
  args: {
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
  },
};

export const PhaseBannerCustomisedWithHyperlinkExample3: Story = {
  args: {
    ...PhaseBannerCustomisedWithHyperlinkExample2.args,
    isHome: true,
  },
};
