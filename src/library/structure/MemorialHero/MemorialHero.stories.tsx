import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MemorialHero from './MemorialHero';
import ServicesLinksList from '../ServicesLinksList/ServicesLinksList';
import { west_theme, lb_theme_west } from './../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof MemorialHero> = {
  title: 'Library/Structure/MemorialHero',
  component: MemorialHero,
};

export default meta;
type Story = StoryObj<typeof MemorialHero>;

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

export const ExampleMemorialHero: Story = {
  args: {
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
    theme: west_theme,
  },
  render: (args) => (
    <ThemeProvider theme={lb_theme_west}>
      <MemorialHero {...args} />
    </ThemeProvider>
  ),
};
