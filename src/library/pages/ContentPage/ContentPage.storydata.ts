/** Example story data for Content Page example */

import { LinkBlockProps } from '../../slices/LinkBlock/LinkBlock.types';

export const smallTable = {
  caption: 'Month you apply',
  headings: ['Date', 'Rate for vehicles', 'Rate for bicycles'],
  data: [
    ['First 6 weeks', '£109.80 per week', '£59.10 per week'],
    ['Next 33 weeks', '£159.80 per week', '£89.10 per week'],
    ['Total estimated pay', '£4,282.20', '£2,182.20'],
  ],
};

export const largeTable = {
  caption: 'Example table with lots of data',
  headings: ['Parish', 'Band A', 'Band B', 'Band C', 'Band D', 'Band E', 'Band F', 'Band G', 'Band H'],
};

export const ExampleLinkBlockData: LinkBlockProps = {
  title: 'Useful videos',
  links: [
    {
      url: 'https://www.youtube.com/watch?v=2g2grZDjr7E',
      title: "Celebrating West Northamptonshire's Litter Heroes",
      summary:
        'Litter heroes from across West Northamptonshire share the positive work they are doing to make our communities cleaner and greener.',
    },
    {
      url: 'https://www.youtube.com/watch?v=MvKGDwVQ_cA',
      title: 'The Creative Place at Northampton Market Square',
      summary: 'Find out more about what could be the smallest creative arts centre in the world',
    },
    {
      url: 'https://www.youtube.com/@WestNorthamptonshireCouncil',
      title: 'West Northamptonshire Council YouTube Channel',
      summary: 'Some more useful information in a video',
    },
  ],
  imageAltText: 'The alt text for the image',
  imageSmall: 'https://picsum.photos/id/1/400/300',
  imageLarge: 'https://picsum.photos/id/1/800/600',
};
