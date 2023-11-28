import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
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
