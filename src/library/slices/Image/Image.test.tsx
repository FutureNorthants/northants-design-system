import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';
import { ImageProps } from './Image.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Image Component', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      imageSmall: 'foo.jpg',
      imageLarge: 'bar.jpg',
      imageAltText: 'The image alt text',
      ratio: '4by3',
      caption: 'The caption for the image',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Image {...props} />
      </ThemeProvider>
    );

  it('should display the image and caption', () => {
    const { getByRole, getByTestId, getByAltText, getByText } = renderComponent();
    const image = getByAltText('The image alt text');
    const imageContainer = getByTestId('ResponsiveImage');
    const figure = getByRole('figure');
    const caption = getByText('The caption for the image');

    // Lazy image loads the placeholder image (foo.jpg)
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'bar.jpg');
    expect(image).toHaveAttribute('alt', 'The image alt text');
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveAttribute('srcset', 'foo.jpg 400w, bar.jpg 1200w');

    expect(imageContainer).toHaveStyle('padding-top: 75%');

    expect(figure).not.toHaveStyle(`border-bottom: 1px solid ${west_theme.theme_vars.colours.grey}`);
    expect(caption).toHaveStyle(`border-bottom: 1px solid ${west_theme.theme_vars.colours.grey}`);
  });

  it('should display the wide image without caption', () => {
    props.caption = null;
    props.ratio = '16by9';

    const { getByRole, getByTestId, getByAltText } = renderComponent();
    const imageContainer = getByTestId('ResponsiveImage');
    const image = getByAltText('The image alt text');
    const figure = getByRole('figure');

    // Lazy image loads the placeholder image (bar.jpg)
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'bar.jpg');
    expect(image).toHaveAttribute('alt', 'The image alt text');

    expect(imageContainer).toHaveStyle('padding-top: 56.25%');

    expect(figure).not.toHaveTextContent;
    expect(figure).not.toHaveStyle(`border-bottom: 1px solid ${west_theme.theme_vars.colours.grey}`);
  });

  it('should display the banner image', () => {
    props.ratio = '4by1';

    const { getByTestId, getByAltText } = renderComponent();

    const image = getByAltText('The image alt text');
    const imageContainer = getByTestId('ResponsiveImage');

    expect(image).toBeVisible();
    expect(imageContainer).toHaveStyle('padding-top: 25%');
  });
});
