import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import RelatedEvents from './RelatedEvents';
import { RelatedEventsProps } from './RelatedEvents.types';

describe('Test Component', () => {
  let props: RelatedEventsProps;

  beforeEach(() => {
    props = {
      title: 'Related events',
      events: [],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RelatedEvents {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('RelatedEvents');

    expect(component).toHaveTextContent('Related events');
  });
});
