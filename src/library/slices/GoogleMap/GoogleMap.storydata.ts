const Common = {
  title: 'Brixworth Country Park Map',
  description:
    'Brixworth Country Park lies next to Pitsford Water and includes cycle hire, cafeteria and WCs. The site has easy access to the 7.5 miles footpath/cyclepath that circumnavigates the water.',
  link_title: 'Click here for the map',
  link_url: 'https://goo.gl/maps/cGPAda2rbksk1LuFA',
  iframe_html:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19510.86230700187!2d-0.895762!3d52.318583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7967b834f2732438!2sBrixworth%20Country%20Park!5e0!3m2!1sen!2suk!4v1644496039794!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};

export const GoogleMapWithTitleAndDescription = {
  ...Common,
  allowCookies: true,
};

export const GoogleMapWithTitleOnly = {
  title: Common.title,
  link_title: Common.link_title,
  link_url: Common.link_url,
  iframe_html: Common.iframe_html,
  allowCookies: true,
};

export const GoogleMapNoTitleOrDescription = {
  link_title: Common.link_title,
  link_url: Common.link_url,
  iframe_html: Common.iframe_html,
  allowCookies: true,
};

export const GoogleMapWithTitleAndDescriptionDataWithoutCookies = {
  ...Common,
  allowCookies: false,
};

export const GoogleMapWithTitleAndDescriptionDataAutodetectCookies = {
  ...Common,
};

export const GoogleMapWithInvalidLinks = {
    title: 'Invalid embedded map',
    description: 'This is an attempt to embed a source that is not Google Maps',
    link_title: 'Click to show a lovely map, it is safe honest',
    link_url: 'https://en.wikipedia.org/wiki/Honeypot_(computing)',
    iframe_html: '<iframe src="https://en.wikipedia.org/wiki/Honeypot_(computing)" />',
    allowCookies: true,
};
