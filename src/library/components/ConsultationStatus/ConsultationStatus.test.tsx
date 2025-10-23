import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ConsultationStatus from './ConsultationStatus';
import { ConsultationStatusProps } from './ConsultationStatus.types';
import dayjs from 'dayjs';

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

  it('should render open and close dates correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationStatus');

    expect(component).toHaveTextContent('10/06/2025');
    expect(component).toHaveTextContent('25/04/2026');
  });

  it('should show with a red background when closeDate is in the past', () => {
    props.closeDate = dayjs().subtract(5, 'day').format('Y-m-d');

    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationStatus');
    expect(component).toHaveStyle('background-color: rgba(157, 11, 29, 0.086)');
  });
});
