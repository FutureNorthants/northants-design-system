import React from 'react';
import NewsArticleImage from './NewsArticleImage';
import { NewsArticleImageProps } from './NewsArticleImage.types';
import { StoryFn } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/News Article Image',
  component: NewsArticleImage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<NewsArticleImageProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <NewsArticleImage {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  image1440x810: 'http://placehold.it/1440x810',
  image144x81: 'http://placehold.it/144x81',
};

export const ExampleWithAlt = Template.bind({});
ExampleWithAlt.args = {
  image1440x810: 'http://placehold.it/1440x810',
  image144x81: 'http://placehold.it/144x81',
  imageAltText: 'This is the alt text',
};

export const ExampleWithCaption = Template.bind({});
ExampleWithCaption.args = {
  image1440x810: 'http://placehold.it/1440x810',
  image144x81: 'http://placehold.it/144x81',
  imageCaption: 'This is the caption',
};
