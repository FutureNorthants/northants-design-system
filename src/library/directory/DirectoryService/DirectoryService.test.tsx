import React from 'react';
import { render } from '@testing-library/react';
import DirectoryService from './DirectoryService';
import { DirectoryServiceProps } from './DirectoryService.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { ExampleService } from './DirectoryService.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

describe('Test Component', () => {
  let props: DirectoryServiceProps;

  beforeEach(() => {
    props = ExampleService;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryShortListProvider>
          <DirectoryService {...props} />
        </DirectoryShortListProvider>
      </ThemeProvider>
    );

  it('should render Service correctly', () => {
    const { getByTestId, getByRole, getByText } = renderComponent();

    const component = getByTestId('DirectoryService');
    const heading = getByRole('heading', { level: 1 });
    const howToContact = getByText('How to contact this service');

    expect(heading).toHaveTextContent('West Northamptonshire Council');
    expect(component).toHaveTextContent(
      'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to residents and businesses'
    );
    expect(howToContact).toBeVisible();
  });

  it('should not show the how to contact section if no contact details set', () => {
    props.email = '';
    props.contacts = [];
    props.url = '';

    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryService');

    expect(component).not.toHaveTextContent('How to contact this service');
  });
});
