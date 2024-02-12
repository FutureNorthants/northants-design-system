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
      binCollections: [],
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
  });
});
