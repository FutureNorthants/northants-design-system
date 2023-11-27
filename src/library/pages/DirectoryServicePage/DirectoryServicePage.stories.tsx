import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DirectoryServicePage } from './DirectoryServicePage';

export default {
  title: 'Page Examples/Directory Service Page',
  component: DirectoryServicePage,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

const Template: Story = (args) => <DirectoryServicePage {...args} />;
export const ExampleDirectoryServicePage = Template.bind({});
