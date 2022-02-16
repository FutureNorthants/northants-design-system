import React from 'react';
import { render } from '@testing-library/react';
import SectionLinks from './SectionLinks';
import { SectionLinksProps } from './SectionLinks.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Section Links', () => {
  let props: SectionLinksProps = {
    sectionTitle: 'The Section Title',
    sectionSlug: 'sectionSlug',
    displayTitle: true,
    hasImages: false,
    pageLinksArray: [
      {
        title: 'The first link',
        summary: 'The summary for the first item',
        url: '/the-first-link/',
        imageSmall: '/small-image-1.jpg',
        imageLarge: '/large-image-1.jpg',
        imageAltText: 'The first image alt text',
      },
      {
        title: 'The second link',
        summary: 'The summary for the second item',
        url: '/the-second-link/',
        imageSmall: '/small-image-2.jpg',
        imageLarge: '/large-image-2.jpg',
        imageAltText: 'The second image alt text',
      },
      {
        title: 'The third link',
        summary: 'The summary for the third item',
        url: '/the-third-link/',
      },
    ],
  };

  it('should display the title and links', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <SectionLinks {...props} />
        </ThemeProvider>
      );

    const { getByTestId, getByRole, getAllByRole } = renderComponent();
    const links = getAllByRole('link');

    expect(getByTestId('SectionLinks')).toBeVisible();

    expect(getByRole('heading')).toHaveTextContent('The Section Title');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('The first link');
    expect(links[0]).toHaveAttribute('href', '/the-first-link/');
    expect(links[0]).toHaveTextContent('The summary for the first item');

    expect(links[1]).toHaveTextContent('The second link');
    expect(links[1]).toHaveAttribute('href', '/the-second-link/');
    expect(links[1]).toHaveTextContent('The summary for the second item');
  });

  it('should not display the title', () => {
    props.displayTitle = false;

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <SectionLinks {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();

    expect(getByTestId('SectionLinks')).not.toHaveTextContent('The Section Title');
  });

  it('should not display images', () => {
    props.hasImages = false;

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <SectionLinks {...props} />
        </ThemeProvider>
      );

    const { queryAllByRole } = renderComponent();

    expect(queryAllByRole('img')).toHaveLength(0);
  });

  it('should display images', () => {
    props.hasImages = true;

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <SectionLinks {...props} />
        </ThemeProvider>
      );

    const { queryAllByRole } = renderComponent();

    const images = queryAllByRole('img');

    // Third link doesn't have an image
    expect(images).toHaveLength(2);

    expect(images[0]).toHaveStyle('background: url("/small-image-1.jpg") center center / cover no-repeat;');
    expect(images[0]).toHaveAttribute('alt', 'The first image alt text');

    expect(images[1]).toHaveStyle('background: url("/small-image-2.jpg") center center / cover no-repeat;');
    expect(images[1]).toHaveAttribute('alt', 'The second image alt text');
  });
});
