import React from 'react';
import Input from '../../components/Input/Input';
import { EventListProps } from './EventList.types';
import Searchbar from '../Searchbar/Searchbar';

export const ExampleEventListResults: EventListProps = {
  totalResults: 10,
  pageNumber: 1,
  filters: [
    {
      title: 'Search',
      content: (
        <div>
          <Searchbar isLight />
        </div>
      ),
    },
    {
      title: 'Dates',
      content: (
        <div>
          <label htmlFor="startDate">Start Date</label>
          <Input name="startDate" value="" id="startDate" type="date" />

          <label htmlFor="endDate">End Date</label>
          <Input name="endDate" value="" id="endDate" type="date" />
        </div>
      ),
    },
  ],
  results: [
    {
      id: '1',
      title: 'An example event',
      summary: 'A short summary of the event that is trimmed to 50 characters on the event list.',
      description:
        '<p>This text will describe the event, detailing what is happening in more detail than the summary.</p><p>It can contain <a href="#">links to other pages</a>.</p>',
      startTime: '16 August 2024 10:00:00',
      endTime: '16 August 2024 11:00:00',
      url: '/events/1',
      // imageLarge: 'https://via.placeholder.com/720x405?text=Event+image',
      // imageSmall: 'https://via.placeholder.com/360x203',
      // imageAltText: 'The example images alt text',
      location: 'One Angel Square',
      email: 'example@westnorthants.gov.uk',
      website: 'https://www.westnorthants.gov.uk',
      telephone: '0123456789',
      address: 'One Angel Square, Angel Street, Northampton, Northamptonshire, NN1 1ED',
    },
    {
      id: '2',
      title: 'An second example event',
      summary: 'A short summary of the event',
      description: 'The second example events description',
      startTime: '18 August 2024 13:00:00',
      endTime: '18 August 2024 15:00:00',
      url: '/events/2',
      location: 'The Guildhall',
    },
    {
      id: '3',
      title: 'An third example event',
      summary: 'A short summary of the event',
      description: 'The third example events description',
      startTime: '18 August 2024 13:00:00',
      endTime: '18 August 2024 15:00:00',
      url: '/events/2',
      location: 'The Guildhall',
    },
    {
      id: '4',
      title: 'An fourth example event',
      summary: 'A short summary of the event',
      description: 'The fourth example events description',
      startTime: '18 August 2024 13:00:00',
      endTime: '18 August 2024 15:00:00',
      url: '/events/2',
      location: 'The Guildhall',
    },
    {
      id: '5',
      title: 'An fifth example event',
      summary: 'A short summary of the event',
      description: 'The fifth example events description',
      startTime: '18 August 2024 13:00:00',
      endTime: '18 August 2024 15:00:00',
      url: '/events/2',
      location: 'The Guildhall',
    },
  ],
};
