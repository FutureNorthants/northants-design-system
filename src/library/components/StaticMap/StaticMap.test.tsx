import React from 'react';
import { render } from '@testing-library/react';
import StaticMap from './StaticMap';
import { StaticMapProps } from './StaticMap.types';

describe('Test Static Map Component', () => {
  let props: StaticMapProps;

  beforeEach(() => {
    props = {
      centre: '',
      imageAltText: 'An example map',
    };
  });

  const renderComponent = () => render(<StaticMap {...props} />);

  it('should render static map correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('StaticMap');
    const image = getByRole('img');

    expect(component).toBeVisible();
    expect(image).toHaveAttribute('alt', 'An example map');
  });
});
