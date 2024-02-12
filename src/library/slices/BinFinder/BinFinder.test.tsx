import React from 'react';
import { render } from '@testing-library/react';
import BinFinder from './BinFinder';
import { BinFinderProps } from './BinFinder.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: BinFinderProps;

  beforeEach(() => {
    props = {
      title: 'Bin Finder',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BinFinder {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BinFinder');

    expect(component).toHaveTextContent('Bin Finder');
  });
});
