import React from 'react';
import { DirectoryServiceProps } from './DirectoryService.types';

export const ExampleService: DirectoryServiceProps = {
  id: 'abc123',
  contacts: [
    {
      name: 'Mrs Smith',
      title: 'Managing Director',
      phones: [
        {
          id: 1,
          number: '0123456789',
        },
        {
          id: 2,
          number: '0123456799',
        },
      ],
    },
  ],
  description: `
      <p>
        West Northamptonshire Council is the single unitary council responsible for providing a range of public services
        to residents and businesses in the areas of Daventry, Northampton and South Northamptonshire.
      </p>
      <p>
        It has replaced Daventry District Council, Northampton Borough Council and South Northamptonshire Council, and
        now delivers all the services which were previously provided by these councils.
      </p>`,
  descriptionElement: (
    <>
      <p>
        West Northamptonshire Council is the single unitary council responsible for providing a range of public services
        to residents and businesses in the areas of Daventry, Northampton and South Northamptonshire.
      </p>
      <p>
        It has replaced Daventry District Council, Northampton Borough Council and South Northamptonshire Council, and
        now delivers all the services which were previously provided by these councils.
      </p>
    </>
  ),
  name: 'West Northants Council',
  email: 'example@service.net',
  organization: {
    name: 'Example Organization',
    id: 'AAA-BBB-CCC-DDD',
    description: 'The org description',
    logo: 'logo.jpg',
    uri: '',
    url: 'https://www.example.com',
  },
  regular_schedules: [
    {
      weekday: 'Monday',
      opens_at: '09:00',
      closes_at: '17:00',
    },
    {
      weekday: 'Tuesday',
      opens_at: '09:30',
      closes_at: '17:30',
    },
    {
      weekday: 'Wednesday',
      opens_at: '08:00',
      closes_at: '14:00',
    },
  ],
  service_at_locations: [
    {
      name: 'Main office',
      description: 'The main council building',
      latitude: '52.23730603697195',
      longitude: '-0.8941710250996565',
      physical_addresses: [
        {
          id: 123,
          address_1: '1 Angel Square, Angel Street',
          city: 'Northampton',
          state_province: 'Northamptonshire',
          postal_code: 'NN1 1ED',
          country: 'United Kingdom',
        },
      ],
    },
  ],
  url: 'https://www.westnorthants.gov.uk',
};
