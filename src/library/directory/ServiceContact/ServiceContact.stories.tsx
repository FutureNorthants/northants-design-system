import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ServiceContact from './ServiceContact';
import { ServiceContactComponentProps } from './ServiceContact.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { MaxWidthContainer, PageMain } from '../../..';

export default {
  title: 'Library/Directory/ServiceContact',
  component: ServiceContact,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<ServiceContactComponentProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <ServiceContact {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleServiceContact = Template.bind({});
ExampleServiceContact.args = {
  email: 'test@test.com',
  website: 'https://www.test.com',
  contacts: [
    {
      id: 1,
      name: 'John Smith',
      title: 'Senior Manager',
      phones: [
        {
          number: '0123456789',
        },
        {
          number: '0777777777',
        },
      ],
    },
  ],
};

export const ServiceContactNoPhones = Template.bind({});
ServiceContactNoPhones.args = {
  contacts: [
    {
      id: 1,
      name: 'John Smith',
      title: 'Senior Manager',
      phones: [],
    },
  ],
};

export const ServiceContactNoTitle = Template.bind({});
ServiceContactNoTitle.args = {
  contacts: [
    {
      id: 1,
      name: 'John Smith',
      title: '',
      phones: [
        {
          number: '0123456789',
        },
      ],
    },
  ],
};
