import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ServiceLinksBoxed from './ServicesLinksBoxed';
import { ServiceLinksBoxedProps } from './ServicesLinksBoxed.types';
import { serviceLinksArray } from './ServicesLinksBoxed.storydata';
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

  it('should show and hide the quicklinks', () => {
    const { queryByText, getAllByRole } = renderComponent();

    const serviceButtons = getAllByRole('button');

    expect(serviceButtons).toHaveLength(4);
    expect(serviceButtons[0]).toHaveTextContent('Adult social services');

    const firstSubLink = queryByText('Report a concern about an adult');
    const secondSubLink = queryByText('Professionals working with adults');
    const viewAllSubLink = queryByText('All adult social services services');

    expect(firstSubLink).not.toBeVisible();
    expect(secondSubLink).not.toBeVisible();
    expect(viewAllSubLink).not.toBeVisible();

    fireEvent.click(serviceButtons[0]);

    expect(firstSubLink).toBeVisible();
    expect(firstSubLink).toHaveAttribute('href', '/first-service/first-sub-service');

    expect(secondSubLink).toBeVisible();
    expect(secondSubLink).toHaveAttribute('href', '/first-service/second-sub-service');

    expect(viewAllSubLink).toBeVisible();
    expect(viewAllSubLink).toHaveAttribute('href', '/first-service');

    fireEvent.click(serviceButtons[0]);

    expect(firstSubLink).not.toBeVisible();
    expect(secondSubLink).not.toBeVisible();
    expect(viewAllSubLink).not.toBeVisible();
  });

  it('should show another services quicklinks when service is clicked', () => {
    const { queryByText, getAllByRole } = renderComponent();

    const serviceButtons = getAllByRole('button');
    const firstServiceSubLink = queryByText('Report a concern about an adult');
    const secondServiceSubLink = queryByText('Apply for council tax reduction');

    fireEvent.click(serviceButtons[0]);

    expect(firstServiceSubLink).toBeVisible();
    expect(secondServiceSubLink).not.toBeVisible();

    fireEvent.click(serviceButtons[1]);

    expect(firstServiceSubLink).not.toBeVisible();
    expect(secondServiceSubLink).toBeVisible();
  });
});
