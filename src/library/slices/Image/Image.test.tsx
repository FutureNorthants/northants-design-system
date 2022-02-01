import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';
import { ImageProps } from './Image.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Image Component', () => {
  const props: ImageProps = {
    imageSmall: 'foo.jpg',
    imageLarge: 'bar.jpg',
    imageAltText: 'The image alt text',
    ratio: '4by3',
    caption: 'The caption for the image',
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Image {...props} />
      </ThemeProvider>
    );

  it('should display the image and caption', () => {
    const { getByRole, getByTestId } = renderComponent();
    const image = getByRole('img');
    const imageContainer = getByTestId('ImageContainer');
    const figure = getByRole('figure');

    // Lazy image loads the placeholder image (foo.jpg)
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'foo.jpg');
    expect(image).toHaveAttribute('alt', 'The image alt text');

    expect(imageContainer).toHaveStyle('padding-top: 75%');

    expect(figure).toHaveTextContent('The caption for the image');
  });
});

describe('Image component with wide image and no caption', () => {
  const props: ImageProps = {
    imageSmall: 'bar.jpg',
    imageLarge: 'baz.jpg',
    imageAltText: 'The image alt text',
    ratio: '16by9',
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Image {...props} />
      </ThemeProvider>
    );

  it('should display the wide image without caption', () => {
    const { getByRole, getByTestId } = renderComponent();
    const imageContainer = getByTestId('ImageContainer');
    const image = getByRole('img');
    const figure = getByRole('figure');

    // Lazy image loads the placeholder image (bar.jpg)
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'bar.jpg');
    expect(image).toHaveAttribute('alt', 'The image alt text');

    expect(imageContainer).toHaveStyle('padding-top: 56.25%');

    expect(figure).not.toHaveTextContent;
  });
});
