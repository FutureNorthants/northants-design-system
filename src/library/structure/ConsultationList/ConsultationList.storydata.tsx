import { ConsultationListProps } from './ConsultationList.types';

export const ExampleConsultationListData: ConsultationListProps = {
  results: [
    {
      id: '1',
      title: 'Example consultation',
      openDate: '2025-10-01',
      closeDate: '2025-10-31',
      summary: 'This is an example consultation summary text',
      url: '/1',
      imageLarge: 'https://picsum.photos/id/20/720/405',
      imageSmall: 'https://picsum.photos/id/20/144/81',
      imageAltText: 'The example images alt text',
      parentTitle: 'Roads and Highways',
      surveyLink: 'https://www.westnorthants.gov.uk',
      contact: 'Jayne Bloggs',
      role: 'Planning officer',
      email: 'example@example.com',
      description: 'An example description',
    },
    {
      id: '2',
      title: 'A closed consultation',
      openDate: '2024-06-01',
      closeDate: '2024-06-31',
      summary: 'This is another example consultation summary text',
      url: '/2',
      imageLarge: 'https://picsum.photos/id/12/720/405',
      imageSmall: 'https://picsum.photos/id/12/144/81',
      imageAltText: 'The example images alt text',
      parentTitle: 'Planning policy',
    },
  ],
  services: [
    {
      title: 'All services',
      value: '',
    },
    {
      title: 'Adult social services',
      value: '1',
    },
    {
      title: 'Bins, recycling and street cleaning',
      value: '2',
    },
  ],
  activityTypes: [
    {
      title: 'All activity types',
      value: '',
    },
    {
      title: 'Consultations',
      value: '1',
    },
    {
      title: 'Engagement activities',
      value: '2',
    },
    {
      title: 'Traffic regulation orders',
      value: '3',
    },
  ],
  totalResults: 56,
  pageNumber: 1,
  consultationsPagePath: '/consultations/',
};
