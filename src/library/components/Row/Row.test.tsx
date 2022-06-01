import React from 'react';
import { render } from '@testing-library/react';
import Row from './Row';
import { RowProps } from './Row.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: RowProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Row {...props}>example content</Row>
      </ThemeProvider>
    );

  it('should render content correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Row');

    expect(component).toHaveTextContent('example content');
  });
});
