import React from 'react';
import { render } from '@testing-library/react';

import Panel from './Panel';
import { PanelProps } from './Panel.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Panel Component', () => {
  let props: PanelProps;

  beforeEach(() => {
    props = {
      heading: 'Application complete',
      children: <p>Your reference number is ABC123.</p>,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Panel {...props} />
      </ThemeProvider>
    );

  it('should render the text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Panel');

    expect(component).toHaveTextContent('Application complete');
    expect(component).toHaveTextContent('Your reference number is ABC123');
  });
});
