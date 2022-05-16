import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import MemorialHero from './MemorialHero';
import { MemorialHeroProps } from './MemorialHero.types';
import ServicesLinksList from '../ServicesLinksList/ServicesLinksList';
import { north_theme, west_theme, lb_theme_north, lb_theme_west } from './../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Library/Structure/MemorialHero',
  component: MemorialHero,
};

const Template: Story<MemorialHeroProps> = (args) => (
  <ThemeProvider theme={lb_theme_north}>
    <MemorialHero {...args} />
  </ThemeProvider>
);

const condolenceLinksArray = [
  {
    title: 'Condolence book',
    url: '/',
    iconKey: 'covid',
    quickLinksArray: [
      {
        title: 'Sign the condolence book and leave a tribute',
        url: '/',
      },
    ],
  },
];

const councilServicesLinksArray = [
  {
    title: 'Proceed to council services',
    url: '#all-services',
  },
];

export const ExampleMemorialHero = Template.bind({});
ExampleMemorialHero.args = {
  src: '/hero-image.png',
  placeholder: '/hero-image-small.png',
  alt: 'Image showing ...',
  children: (
    <ServicesLinksList
      hasBackground={true}
      hideHeader={true}
      serviceLinksArray={condolenceLinksArray}
      oneCol={true}
      serviceId="condolence-link"
    />
  ),
  councilServices: (
    <ServicesLinksList
      oneCol={true}
      hasBackground={true}
      hideHeader={true}
      serviceLinksArray={councilServicesLinksArray}
      serviceId="proceed-to-council-services-link"
    />
  ),
  theme: north_theme,
};
