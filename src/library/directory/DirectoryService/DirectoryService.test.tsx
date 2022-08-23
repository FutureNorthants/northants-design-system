import React from 'react';
import { render } from '@testing-library/react';
import DirectoryService from './DirectoryService';
import { DirectoryServiceProps } from './DirectoryService.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: DirectoryServiceProps;

  beforeEach(() => {
    props = {
      name: 'Example Service',
      description: 'The service description',
      organization: {
        id: 'aaa-bbb-123-444-ccc',
        name: 'Example Organzation',
        description: 'The organization description',
        logo: '',
        url: '',
        uri: '',
      },
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryService {...props} />
      </ThemeProvider>
    );

  it('should render Service correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryService');

    expect(component).toHaveTextContent('Example Service');
    expect(component).toHaveTextContent('The service description');
  });
});
