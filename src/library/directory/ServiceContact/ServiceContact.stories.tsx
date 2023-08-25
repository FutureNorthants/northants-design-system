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

export const ServiceContactLongWebsite = Template.bind({});
ServiceContactLongWebsite.args = {
  email: 'long.email.address.that.could.wrap@westnorthants.gov.uk',
  website:
    'http://www.northamptonshire.gov.uk/councilservices/children-families-education/young-northants/education/Pages/after-year-11.aspx',
  contacts: [
    {
      id: 1,
      name: 'Johnathan David Webster-Smith-Jones',
      title: '',
      phones: [
        {
          number: '0123456789',
        },
        {
          number: '0123456799',
        },
      ],
    },
  ],
};
