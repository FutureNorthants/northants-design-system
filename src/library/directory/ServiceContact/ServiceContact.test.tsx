import React from 'react';
import { render } from '@testing-library/react';
import ServiceContact from './ServiceContact';
import { ServiceContactProps } from './ServiceContact.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: ServiceContactProps;

  beforeEach(() => {
    props = {
      name: 'Mr Smith',
      title: 'Manager',
      phones: [
        {
          number: '123456789',
        },
        {
          number: '111222333444',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ServiceContact {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ServiceContact');

    expect(component).toHaveTextContent('Mr Smith');
    expect(component).toHaveTextContent('Manager');
    expect(component).toHaveTextContent('123456789');
    expect(component).toHaveTextContent('111222333444');
  });
});
