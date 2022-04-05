import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ServiceLinksBoxed from './ServiceLinksBoxed';
import { ServiceLinksBoxedProps } from './ServiceLinksBoxed.types';
import { serviceLinksArray } from './ServiceLinksBoxed.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: ServiceLinksBoxedProps;

  beforeEach(() => {
    props = {
      serviceLinksArray,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ServiceLinksBoxed {...props} />
      </ThemeProvider>
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ServiceLinksBoxed');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Adult social services');
    expect(component).toHaveTextContent('Benefits');
    expect(component).toHaveTextContent('Bins, recycling and street cleaning');
    expect(component).toHaveTextContent('Births, deaths and marriages');
  });

  it('should hide and show the quicklinks', () => {
    const { queryByText, getAllByRole } = renderComponent();

    const serviceButtons = getAllByRole('button');

    expect(serviceButtons).toHaveLength(4);
    expect(serviceButtons[0]).toHaveTextContent('Adult social services');

    expect(queryByText('Report a concern about an adult')).not.toBeVisible();
    expect(queryByText('Professionals working with adults')).not.toBeVisible();

    fireEvent.click(serviceButtons[0]);

    expect(queryByText('Report a concern about an adult')).toBeVisible();
    expect(queryByText('Professionals working with adults')).toBeVisible();
  });
});
