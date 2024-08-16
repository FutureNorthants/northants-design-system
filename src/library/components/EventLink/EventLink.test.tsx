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
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <EventLink {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('EventLink');

    expect(component).toHaveTextContent('An example event');
  });
});
