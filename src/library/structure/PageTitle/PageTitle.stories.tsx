import React from 'react';
import PageTitle from './PageTitle';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

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
