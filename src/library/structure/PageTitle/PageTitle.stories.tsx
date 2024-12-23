import React from 'react';
import PageTitle from './PageTitle';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../../components/Heading/Heading';

const meta: Meta<typeof PageTitle> = {
  title: 'Library/structure/Page Title Container',
  component: PageTitle,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const PageTitleExample: Story = {
  args: {
    classes: 'testclass',
  },
  render: (args) => (
    <PageTitle {...args}>
      {' '}
      <Heading level={1} text="News" />
    </PageTitle>
  ),
};
