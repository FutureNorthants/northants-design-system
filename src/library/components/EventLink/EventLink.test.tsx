import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import EventLink from './EventLink';
import { EventLinkProps } from './EventLink.types';

describe('Event Link Component', () => {
  let props: EventLinkProps;

  beforeEach(() => {
    props = {
      title: 'An example event',
      summary: 'The example events summary.',
      startTime: '16 August 2024 10:00:00',
      endTime: '16 August 2024 11:00:00',
      url: '/events/1',
      imageLarge: 'https://via.placeholder.com/720x405',
      imageSmall: 'https://via.placeholder.com/360x203',
      imageAltText: 'The example images alt text',
      location: 'One Angel Square',
      showSummary: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <EventLink {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('EventLink');
    const image = getByRole('img');

    expect(component).toHaveTextContent('An example event');
    expect(component).toHaveAttribute('href', '/events/1');
    expect(component).toHaveTextContent('Friday 16 August 2024 at 10am');
    expect(component).toHaveTextContent('One Angel Square');
    expect(component).toHaveTextContent('The example events summary.');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt', 'The example images alt text');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/720x405');
  });

  it('should hide the summary text', () => {
    props.showSummary = false;

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventLink');

    expect(component).not.toHaveTextContent('The example events summary.');
  });

  it('should show the promoted tag if promoted', () => {
    props.isPromoted = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventLink');

    expect(component).toHaveTextContent('Featured');
  });

  it('should show the parent title when set', () => {
    props.parentTitle = 'Housing';

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventLink');

    expect(component).toHaveTextContent('Housing');
  });
});
