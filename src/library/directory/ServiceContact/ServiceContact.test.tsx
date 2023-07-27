import React from 'react';
import { render } from '@testing-library/react';
import ServiceContact from './ServiceContact';
import { ServiceContactComponentProps, ServiceContactProps } from './ServiceContact.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: ServiceContactComponentProps;

  beforeEach(() => {
    props = {
      email: 'test@test.com',
      website: 'https://www.test.com',
      contacts: [
        {
          id: 1,
          name: 'Mr Smith',
          title: 'Manager',
          phones: [
            {
              id: 123,
              number: '123456789',
            },
            {
              id: 124,
              number: '111222333444',
            },
          ],
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

    expect(component).toHaveTextContent('test@test.com');
    expect(component).toHaveTextContent('https://www.test.com');
    expect(component).toHaveTextContent('Mr Smith');
    expect(component).toHaveTextContent('123456789');
    expect(component).toHaveTextContent('111222333444');
  });
});
