import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';
import { CardsProps } from './Cards.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: CardsProps;

  beforeEach(() => {
    props = {
      cards: [
        {
          header: 'First heading',
          content: '<p>First example content</p>',
        },
        {
          header: 'Second heading',
          content: '<p>Second example content</p>',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Cards {...props} />
      </ThemeProvider>
    );

  it('should render cards correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('Cards');

    expect(component).toHaveTextContent('First example content');
    expect(component).toHaveTextContent('Second example content');
    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
