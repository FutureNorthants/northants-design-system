import React from 'react';
import PageTitle from './PageTitle';
import { PageTitleProps } from './PageTitle.types';
import { StoryFn } from '@storybook/react-webpack5';
import Heading from '../../components/Heading/Heading';

export default {
  title: 'Library/structure/Page Title Container',
  component: PageTitle,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PageTitleProps> = (args) => (
  <PageTitle {...args}>
    {' '}
    <Heading level={1} text="News" />
  </PageTitle>
);

export const PageTitleExample = Template.bind({});
PageTitleExample.args = {
  classes: 'testclass',
};
