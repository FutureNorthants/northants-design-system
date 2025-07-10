import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { NewsArticle } from './NewsArticle';

const meta: Meta<typeof NewsArticle> = {
  title: 'Page Examples/News Article example',
  component: NewsArticle,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticle>;

export const ExampleNewsArticle: Story = {
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleNewsArticleWithImage: Story = {
  args: {
    withImage:
      'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
    imagePlaceholder:
      'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleNewsArticleThatIsOld: Story = {
  args: {
    isOld: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};
