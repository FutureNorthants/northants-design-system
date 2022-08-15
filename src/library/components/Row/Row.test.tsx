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
    const { getByTestId, queryByRole } = renderComponent();

    const component = getByTestId('Row');
    const list = queryByRole('list');

    expect(component).toHaveTextContent('example content');
    expect(list).toBeNull();
  });

  it('should render the container as an unordered list', () => {
    props.isList = true;

    const { getByRole } = renderComponent();

    const list = getByRole('list');

    expect(list).toBeVisible();
    expect(list).toHaveAttribute('data-testid', 'Row');
  });
});
