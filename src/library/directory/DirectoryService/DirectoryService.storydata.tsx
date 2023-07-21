import React from 'react';
import { DirectoryServiceProps, LocationProps } from './DirectoryService.types';
import { ExampleSocialProfiles } from '../ServiceSocialLinks/ServiceSocialLinks.storydata';

export const ExampleService: DirectoryServiceProps = {
  id: 'abc123',
  contacts: [
    {
      id: 1,
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
  name: 'West Northamptonshire Council',
  eligibilitys: [
    {
      id: 1,
      eligibility: '',
      minimum_age: 0,
      maximum_age: 216,
    },
  ],
  email: 'example@service.net',
  languages: [
    {
      id: 1,
      language: 'French',
    },
    {
      id: 2,
      language: 'German',
    },
  ],
  organization: {
    name: 'Example Organization',
    id: 'AAA-BBB-CCC-DDD',
    description: 'The org description',
    logo: 'https://via.placeholder.com/425x283?text=425+by+283+image',
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
      id: 123,
      name: 'Main office',
      description: 'The main council building',
      latitude: '52.23555414368587',
      longitude: '-0.8957390701320571',
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
      accessibility_for_disabilities: [
        {
          id: 1,
          accessibility: 'Car parking',
        },
        {
          id: 2,
          accessibility: 'Restaurant/Café',
        },
      ],
    },
  ],
  service_taxonomys: [
    {
      id: 'localOffer:3',
      name: 'Education',
      vocabulary: 'localOffer',
      parent: null,
    },
    {
      id: 'localOffer:12',
      name: 'Training and Apprenticeships',
      vocabulary: 'localOffer',
      parent: null,
    },
    {
      id: 'specialNeeds:25',
      name: 'Special Educational Needs or a Disability (SEND)',
      vocabulary: 'specialNeeds',
      parent: null,
    },
    {
      id: 'providerType:12',
      name: 'Local Government Department',
      vocabulary: 'providerType',
      parent: null,
    },
    {
      id: 'providerCategory:2',
      name: 'Targeted',
      vocabulary: 'providerCategory',
      parent: null,
    },
    {
      id: 'referralRoute:11',
      name: 'Professional referral',
      vocabulary: 'referralRoute',
      parent: null,
    },
    {
      id: 'eligibilityCriteria:3',
      name: 'Age - Adulthood (18-25)',
      vocabulary: 'eligibilityCriteria',
      parent: null,
    },
  ],
  taxonomiesToShow: [
    {
      vocabulary: 'referralRoute',
      label: 'Referral Route',
    },
    {
      vocabulary: 'providerType',
      label: 'Type of Service',
    },
    {
      vocabulary: 'eligibilityCriteria',
      label: 'Eligibility Criteria',
    },
    {
      vocabulary: 'providerCategory',
      label: 'Provider Category',
    },
  ],
  url: 'https://www.westnorthants.gov.uk',
  accreditations: 'Ofsted Grade: Good (4 July 2019)',
  fees: 'Contact provider for cost details',
  service_areas: [
    {
      id: 1,
      service_area: 'Northampton',
    },
    {
      id: 2,
      service_area: 'West Northamptonshire',
    },
  ],
  uploads: [
    {
      title: 'A file containing more information',
      type: 'application/pdf',
      url: '#',
      size: '0.5MB',
      archived: false,
    },
    {
      title: 'An example file download',
      type: 'application/pdf',
      url: '#',
      size: '0.25MB',
      archived: false,
    },
  ],
  shortListPath: '/directory/local-offer',
  service_social_profiles: ExampleSocialProfiles.profiles,
  updated_at: '2023-07-21',
};

export const MultipleLocations: LocationProps[] = [
  {
    id: 124,
    name: 'Main office',
    description: 'The main council building',
    latitude: '52.23555414368587',
    longitude: '-0.8957390701320571',
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
    accessibility_for_disabilities: [
      {
        id: 1,
        accessibility: 'Car parking',
      },
      {
        id: 2,
        accessibility: 'Restaurant/Café',
      },
    ],
  },
  {
    id: 125,
    name: 'The Guildhall',
    description: 'Another council building',
    latitude: '52.237187',
    longitude: '-0.894843',
    physical_addresses: [
      {
        id: 123,
        address_1: 'The Guildhall, St Giles Square',
        city: 'Northampton',
        state_province: 'Northamptonshire',
        postal_code: 'NN1 1DE',
        country: 'United Kingdom',
      },
    ],
    accessibility_for_disabilities: [
      {
        id: 3,
        accessibility: 'Restaurant/Café',
      },
    ],
  },
];

export const OneVisitableLocation: LocationProps[] = [
  {
    id: 126,
    name: 'County Hall',
    description: 'One more council building',
    latitude: '52.237187',
    longitude: '-0.894843',
    is_visitable: false,
    physical_addresses: [
      {
        id: 123,
        address_1: 'County Hall, St Giles Square',
        city: 'Northampton',
        state_province: 'Northamptonshire',
        postal_code: 'NN1 1DE',
        country: 'United Kingdom',
      },
    ],
    accessibility_for_disabilities: [
      {
        id: 3,
        accessibility: 'Restaurant/Café',
      },
    ],
  },
];
