import React from 'react';
import { getByAltText, render } from '@testing-library/react';
import ImageAndText from './ImageAndText';
import { ImageAndTextProps } from './ImageAndText.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import { ImageAndTextWithHeading } from './ImageAndText.storydata';

describe('Test Component', () => {
  let props: ImageAndTextProps;

  beforeEach(() => {
    props = ImageAndTextWithHeading;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ImageAndText {...props} />
      </ThemeProvider>
    );

  it('should render the image, heading and content correctly', () => {
    const { getByTestId, getByRole, getByAltText } = renderComponent();

    const component = getByTestId('ImageAndText');
    const heading = getByRole('heading');
    const image = getByAltText('The image alt text');

    expect(heading).toHaveTextContent('An example heading');
    expect(component).toHaveTextContent('Lorem ipsum dolor sit amet');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/800x600?text=4+by+3+image');
    expect(image).toHaveAttribute('alt', 'The image alt text');
  });

  it('should render without a heading', () => {
    props.heading = undefined;

    const { getByTestId, queryByRole, getByAltText } = renderComponent();

    const component = getByTestId('ImageAndText');
    const heading = queryByRole('heading');
    const image = getByAltText('The image alt text');

    expect(heading).toBeNull();
    expect(component).toHaveTextContent('Lorem ipsum dolor sit amet');
    expect(image).toBeVisible();
  });
});
