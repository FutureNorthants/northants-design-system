import React from 'react';
import { render } from '@testing-library/react';
import Column from './Column';
import { ColumnProps } from './Column.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Column', () => {
  let props: ColumnProps;

  beforeEach(() => {
    props = {
      small: 'full',
      medium: 'full',
      large: 'full',
      hasPadding: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Column {...props}>example content</Column>
      </ThemeProvider>
    );

  it('should display the Column child content', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveTextContent('example content');
    expect(component).toHaveStyle('width: 100%;');
  });

  it('should render one-half column correctly', () => {
    props.small = 'one-half';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('width: 50%;');
  });

  it('should render one-third column correctly', () => {
    props.small = 'one-third';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('width: 33.333%;');
  });

  it('should render one-quarter column correctly', () => {
    props.small = 'one-quarter';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('width: 25%;');
  });

  it('should render two-thirds column correctly', () => {
    props.small = 'two-thirds';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('width: 66.666%;');
  });

  it('should render three-quarters column correctly', () => {
    props.small = 'three-quarters';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('width: 75%;');
  });

  it('should render the column without padding', () => {
    props.hasPadding = false;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Column');

    expect(component).toHaveStyle('padding: 0;');
  });
});
