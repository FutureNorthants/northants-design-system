/** Example story data for Content Page example */

import { GoogleMapProps } from '../../slices/GoogleMap/GoogleMap.types';

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
  headings: ['', 'Band A', 'Band B', 'Band C', 'Band D', 'Band E', 'Band F', 'Band G', 'Band H'],
};

export const googleMapData: GoogleMapProps = {
  title: 'An example Google map',
  description: 'Some description text for the map',
  link_url: 'https://goo.gl/maps/uEQBSox9DN4z9BFy8',
  link_title: 'View on a Map',
  iframe_html:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19510.86230700187!2d-0.895762!3d52.318583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7967b834f2732438!2sBrixworth%20Country%20Park!5e0!3m2!1sen!2suk!4v1644496039794!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};
