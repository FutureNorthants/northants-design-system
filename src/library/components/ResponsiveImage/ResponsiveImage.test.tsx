import React from 'react';
import { render } from '@testing-library/react';

import ResponsiveImage from './ResponsiveImage';
import { ResponsiveImageProps } from './ResponsiveImage.types';

describe('Responsive Image Component', () => {
  let props: ResponsiveImageProps;

  beforeEach(() => {
    props = {
      imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
      imageSmall: 'https://via.placeholder.com/400x300',
      smallWidth: '400',
      largeWidth: '800',
      imageAltText: 'Parkland',
      ratio: '4by3',
      objectFit: 'cover',
    };
  });

  const renderComponent = () => render(<ResponsiveImage {...props} />);

  it('should render responsive image correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('ResponsiveImage');
    const image = getByRole('img');

    expect(component).toBeVisible();
    expect(component).toHaveStyle('padding-top: 75%;');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/800x600?text=4+by+3+image');
    expect(image).toHaveAttribute(
      'srcset',
      'https://via.placeholder.com/400x300 400w, https://via.placeholder.com/800x600?text=4+by+3+image 800w'
    );
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveStyle('object-fit: cover');
  });

  it('should render a 16by9 image', () => {
    props.ratio = '16by9';

    const { getByTestId } = renderComponent();

    const component = getByTestId('ResponsiveImage');
    expect(component).toHaveStyle('padding-top: 56.25%');
  });

  it('should render a 4by1 image', () => {
    props.ratio = '4by1';

    const { getByTestId } = renderComponent();

    const component = getByTestId('ResponsiveImage');
    expect(component).toHaveStyle('padding-top: 25%');
  });

  it('should render an auto image', () => {
    props.ratio = 'auto';

    const { getByTestId } = renderComponent();

    const component = getByTestId('ResponsiveImage');
    expect(component).toHaveStyle('position: absolute;');
    expect(component).toHaveStyle('top: 0;');
    expect(component).toHaveStyle('left: 0;');
    expect(component).toHaveStyle('bottom: 0;');
    expect(component).toHaveStyle('right: 0;');
  });

  it('should render the image with object fit contain', () => {
    props.objectFit = 'contain';

    const { getByRole } = renderComponent();

    const image = getByRole('img');
    expect(image).toHaveStyle('object-fit: contain');
  });
});
