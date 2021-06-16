import React from "react";
import NewsArticleOldBanner from "./NewsArticleOldBanner";
import { NewsArticleOldBannerProps } from "./NewsArticleOldBanner.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/News Article Old Banner',
    component: NewsArticleOldBanner,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<NewsArticleOldBannerProps> = (args) => <SBPadding><MaxWidthContainer><NewsArticleOldBanner {...args} /></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
  text: "Example News Article Date"
};
