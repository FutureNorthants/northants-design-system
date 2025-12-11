import React from 'react';
import { render } from '@testing-library/react';
import BinCollection from './BinCollection';
import { BinCollectionProps } from './BinCollection.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: BinCollectionProps;

  beforeEach(() => {
    props = {
      address: '4A ANGEL STREET, NORTHAMPTON, NN1 1ED',
      binCollections: [
        {
          type: 'food',
          date: '2024-03-04',
        },
        {
          type: 'recycling_boxes',
          date: '2024-03-05',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BinCollection {...props} />
      </ThemeProvider>
    );

  it('should render address correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BinCollection');

    expect(component).toHaveTextContent('4A ANGEL STREET, NORTHAMPTON, NN1 1ED');
    expect(component).toHaveTextContent('Food Caddy');
    expect(component).toHaveTextContent('Monday 4 March 2024');
    expect(component).toHaveTextContent('Recycling Boxes');
    expect(component).toHaveTextContent('Tuesday 5 March 2024');
  });

  it('handles unknown collection types', () => {
    props.binCollections = [
      {
        type: 'food',
        date: '2024-03-04',
      },
      {
        type: 'clinical', // Unknown collection type
        date: '2024-03-05',
      },
    ];

    const { getByTestId } = renderComponent();

    const component = getByTestId('BinCollection');

    expect(component).toHaveTextContent('4A ANGEL STREET, NORTHAMPTON, NN1 1ED');
    expect(component).toHaveTextContent('Food Caddy');
    expect(component).not.toHaveTextContent('Clinical');
  });
});
