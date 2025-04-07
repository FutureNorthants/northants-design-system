import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuickExit from './QuickExit';
import { QuickExitProps } from './QuickExit.types';

describe('Test Component', () => {
  let props: QuickExitProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <QuickExit {...props} />
      </ThemeProvider>
    );

  it('should render "Quick exit" text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('QuickExit');

    expect(component).toHaveTextContent('Quick exit');
  });
});
