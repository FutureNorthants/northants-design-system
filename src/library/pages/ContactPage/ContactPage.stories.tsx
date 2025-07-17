import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import { ContactPage, ContactPageProps } from './ContactPage';

export default {
  title: 'Page Examples/Contact Page',
  component: ContactPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<ContactPageProps> = (args) => <ContactPage {...args} />;

export const ExampleContactPage = Template.bind({});
