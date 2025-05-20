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
          parentTitle: 'Housing',
        },
      ],
      totalResults: 1,
      pageNumber: 1,
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

    expect(component).toHaveTextContent('1 event');
    expect(component).toHaveTextContent('An example event');
    expect(component).toHaveTextContent('Friday 16 August 2024 at 10am');
    expect(component).toHaveTextContent('The Guildhall');
    expect(component).toHaveTextContent('Housing');
    expect(component).not.toHaveTextContent('Clear filters');

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/events/1');
  });

  it('should pluralise events when more than one', () => {
    props.totalResults = 2;

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventList');

    expect(component).toHaveTextContent('2 events');
  });

  it('should show clear filters when a filter  has been applied', () => {
    props.eventSearch = 'test search term';

    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('EventList');
    const eventSearch = getByLabelText('Search');

    expect(eventSearch).toHaveValue('test search term');
    expect(component).toHaveTextContent('Clear filters');
  });
});
