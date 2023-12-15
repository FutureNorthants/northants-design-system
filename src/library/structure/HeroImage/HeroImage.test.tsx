import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import { breadcrumbs } from '../../pages/ServiceLandingPageExample/ServiceLandingPageExample.storydata';
import { HeroImageExampleBoxedWithCustomSearch } from './HeroImage.storydata';

describe('HeroImage slice', () => {
  let props: HeroImageProps;

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <HeroImage {...props} />
      </ThemeProvider>
    );

  it('should render text in a box when backgroundBox is true', () => {
    props = {
      imageLarge:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
      imageSmall:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
      imageAltText: 'alt text',
      backgroundBox: true,
      headline: 'Headline',
      content: '<p>Hello world</p>',
      callToActionURL: 'http://www.google.com',
      callToActionText: 'Google',
    };

    const { getByText, getByRole, getByTestId, queryByTestId } = renderComponent();

    const h1 = getByRole('heading');
    expect(h1).toBeVisible();
    expect(h1).toHaveTextContent('Headline');

    const content = getByText('Hello world');
    expect(content).toBeVisible();

    const link = getByRole('link');
    expect(link).toHaveTextContent('Google');
    expect(link).toHaveAttribute('href', 'http://www.google.com');

    const imgaltspan = getByRole('img');
    expect(imgaltspan).toHaveAttribute('alt');

    const overlay = getByTestId('HeroImageOverlay');
    expect(overlay).not.toHaveStyle('background-color: transparent');

    const backgroundBox = queryByTestId('BackgroundBox');
    expect(backgroundBox).toBeNull();
  });

  it('should render text on a gradient when backgroundBox is false', () => {
    props = {
      imageLarge:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
      imageSmall:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
      imageAltText: 'alt text',
      backgroundBox: false,
      headline: 'Headline',
      content: '<p>Hello world</p>',
      callToActionURL: 'http://www.google.com',
      callToActionText: 'Google',
    };

    const { getByText, getByRole, getByTestId } = renderComponent();

    const h1 = getByRole('heading');
    expect(h1).toBeVisible();
    expect(h1).toHaveTextContent('Headline');

    const content = getByText('Hello world');
    expect(content).toBeVisible();

    const link = getByRole('link');
    expect(link).toHaveTextContent('Google');
    expect(link).toHaveAttribute('href', 'http://www.google.com');

    const imgaltspan = getByRole('img');
    expect(imgaltspan).toHaveAttribute('alt');

    const overlay = getByTestId('HeroImageOverlay');
    expect(overlay).toHaveStyle('background-color: transparent');

    const container = getByTestId('HeroImage');
    expect(container).toHaveStyle('background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))');
  });

  it("shouldn't render text when none is supplied", () => {
    props = {
      imageLarge:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
      imageSmall:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
      imageAltText: null,
      backgroundBox: false,
    };

    const { queryByText, queryByRole } = renderComponent();

    const h1 = queryByRole('heading');
    expect(h1).toBeNull();

    const content = queryByText('Hello world');
    expect(content).toBeNull();

    const link = queryByRole('link');
    expect(link).toBeNull();

    const imgaltspan = queryByRole('img');
    expect(imgaltspan).toHaveAttribute('alt', '');
  });

  it('should display the parent breadcrumb in the hero image', () => {
    props = {
      imageLarge:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
      imageSmall:
        'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
      imageAltText: 'alt text',
      backgroundBox: true,
      headline: 'Headline',
      content: '<p>Hello world</p>',
      breadcrumb: {
        title: 'Country Parks',
        url: '/country-parks',
      },
    };

    const { getByText, queryByText } = renderComponent();

    const breadcrumb = getByText('Country Parks');

    expect(breadcrumb).toBeVisible();
    expect(breadcrumb).toHaveAttribute('href', '/country-parks');
    expect(breadcrumb).toHaveStyle(`color: ${west_theme.theme_vars.colours.action}`);

    expect(queryByText('Home')).toBeNull();
  });

  it('should render the custom search box', () => {
    props = HeroImageExampleBoxedWithCustomSearch;

    const { getByRole, getByPlaceholderText } = renderComponent();

    const input = getByPlaceholderText('Search courses');
    const form = getByRole('form');
    const link = getByRole('link');

    expect(input).toBeVisible();

    expect(form).toHaveAttribute('method', 'post');
    expect(form).toHaveAttribute('action', 'https://courses.northantsglobal.net/CourseKeySearch.asp');

    expect(link).toHaveClass('button--secondary');
  });
});
