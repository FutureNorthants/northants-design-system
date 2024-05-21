import React from 'react';
import { render } from '@testing-library/react';
import ErrorSummary from './ErrorSummary';
import { ErrorSummaryProps } from './ErrorSummary.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Error Summary', () => {
  let props: ErrorSummaryProps;

  beforeEach(() => {
    props = {
      errors: {
        Email: {
          message: 'Invalid email address.',
          type: 'pattern',
        },
        Name: {
          message: 'The field name is required.',
          type: 'required',
        },
      },
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ErrorSummary {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('ErrorSummary');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('There is a problem');

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '#EmailError');
    expect(links[0]).toHaveTextContent('Invalid email address.');
    expect(links[1]).toHaveAttribute('href', '#NameError');
    expect(links[1]).toHaveTextContent('The field name is required.');
  });
});
