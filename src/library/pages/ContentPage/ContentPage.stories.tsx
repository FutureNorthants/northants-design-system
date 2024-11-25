import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ContentPage, ContentPageProps } from './ContentPage';

export default {
  title: 'Page Examples/Content Page',
  component: ContentPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<ContentPageProps> = (args) => <ContentPage {...args} />;

export const ExampleContentPage = Template.bind({});
