import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ConsultationStatus from './ConsultationStatus';
import { ConsultationStatusProps } from './ConsultationStatus.types';

describe('Consultation Status Component', () => {
  let props: ConsultationStatusProps;

  beforeEach(() => {
    props = {
      openDate: '2025-06-10',
      closeDate: '2026-04-25',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ConsultationStatus {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationStatus');

    expect(component).toHaveTextContent('10/06/2025');
    expect(component).toHaveTextContent('25/04/2026');
  });
});
