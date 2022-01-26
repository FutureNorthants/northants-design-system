import React from 'react';
import { render } from '@testing-library/react';
import Summary from './Summary';
import { SummaryProps } from './Summary.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: SummaryProps = {
    hasPadding: true,
    hasBackground: true,
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Summary {...props}>
          <p>This is some summary text</p>
        </Summary>
      </ThemeProvider>
    );

  it('should render summary text and styles correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Summary');

    expect(component).toHaveTextContent('This is some summary text');
    expect(component).toHaveStyle(`color: ${west_theme.theme_vars.colours.action}`);
    expect(component).toHaveStyle(`background-color: ${west_theme.theme_vars.colours.grey_light}`);
    expect(component).toHaveStyle('padding: 30px 15px');
  });

  it('should render without background colour', () => {
    props.hasBackground = false;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Summary');

    expect(component).toHaveStyle('background-color: transparent');
  });

  it('should render without padding', () => {
    props.hasPadding = false;
    const { getByTestId } = renderComponent();

    const component = getByTestId('Summary');

    expect(component).toHaveStyle('padding: 0');
  });
});
