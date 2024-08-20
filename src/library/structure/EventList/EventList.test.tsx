import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import EventList from './EventList';
import { EventListProps } from './EventList.types';

describe('Event List Component', () => {
  let props: EventListProps;

  beforeEach(() => {
    props = {
      services: [],
      results: [
        {
          id: '1',
          title: 'An example event',
          description: 'The example events description',
          startTime: '16 August 2024 10:00:00',
          endTime: '16 August 2024 11:00:00',
          url: '/events/1',
          location: 'The Guildhall',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <EventList {...props} />
      </ThemeProvider>
    );

  it('should render title and date correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('EventList');
    const link = getByRole('link');

    expect(component).toHaveTextContent('An example event');
    expect(component).toHaveTextContent('Friday 16 August 2024 at 10:00 am');
    expect(component).toHaveTextContent('The Guildhall');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/events/1');
  });
});
