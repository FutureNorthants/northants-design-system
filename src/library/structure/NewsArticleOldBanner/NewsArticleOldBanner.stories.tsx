import React from 'react';
import NewsArticleOldBanner from './NewsArticleOldBanner';
import { NewsArticleOldBannerProps } from './NewsArticleOldBanner.types';
import { StoryFn } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/News Article Old Banner',
  component: NewsArticleOldBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<NewsArticleOldBannerProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <NewsArticleOldBanner {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  text: 'Example News Article Date',
};
