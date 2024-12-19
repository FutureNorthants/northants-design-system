import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ServiceContact from './ServiceContact';
import { MaxWidthContainer, PageMain } from '../../..';

const meta: Meta<typeof ServiceContact> = {
  title: 'Library/Directory/ServiceContact',
  component: ServiceContact,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceContact>;

export const ExampleServiceContact: Story = {
  args: {
    email: 'test@test.com',
    website: 'https://www.test.com',
    contacts: [
      {
        id: 1,
        name: 'John Smith',
        title: 'Senior Manager',
        phones: [
          {
            id: 1234,
            number: '0123456789',
          },
          {
            id: 1233,
            number: '0777777777',
          },
        ],
      },
    ],
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ServiceContact {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ServiceContactNoPhones: Story = {
  ...ExampleServiceContact,
  args: {
    contacts: [
      {
        id: 1,
        name: 'John Smith',
        title: 'Senior Manager',
        phones: [],
      },
    ],
  },
};

export const ServiceContactLongWebsite: Story = {
  ...ExampleServiceContact,
  args: {
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
            id: 1234,
            number: '0123456789',
          },
          {
            id: 1235,
            number: '0123456799',
          },
        ],
      },
    ],
  },
};
