import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuickExit from './QuickExit';
import { QuickExitProps } from './QuickExit.types';

describe('Test Component', () => {
  let props: QuickExitProps;
  // Mock the window.location.replace method
  const mockReplace = jest.fn();

  beforeEach(() => {
    props = {};

    Object.defineProperty(window, 'location', {
      value: {
        replace: mockReplace,
      },
    });
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

  it('should redirect to default url', async () => {
    const { getByRole } = renderComponent();

    const exitButton = getByRole('button');

    fireEvent.click(exitButton);

    expect(mockReplace).toHaveBeenCalledWith('https://www.bbc.co.uk/weather');
  });

  it('should render custom label text correctly', () => {
    props.label = 'Click to exit the page';

    const { getByRole } = renderComponent();

    const exitButton = getByRole('button');

    expect(exitButton).not.toHaveTextContent('Quick exit');
    expect(exitButton).toHaveTextContent('Click to exit the page');
  });

  it('should redirect to custom url', async () => {
    props.url = 'https://www.westnorthants.gov.uk';

    const { getByRole } = renderComponent();

    const exitButton = getByRole('button');

    fireEvent.click(exitButton);

    expect(mockReplace).toHaveBeenCalledWith('https://www.westnorthants.gov.uk');
  });
});
