import React from 'react';
import { render } from '@testing-library/react';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: DirectoryServiceListProps;

  beforeEach(() => {
    props = {
      directoryPath: '/directory',
      services: [ExampleService],
      totalResults: 1,
      pageNumber: 1,
      searchTerm: 'the search term',
      searchPostcode: 'NN1 1AA',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryServiceList {...props} />
      </ThemeProvider>
    );

  it('should render service results correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryServiceList');

    expect(component).toHaveTextContent(ExampleService.name);
    expect(component).toHaveTextContent('Showing 1 out of 1');
    expect(component).toHaveTextContent(
      'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to …'
    );
  });

  it('should render the provided search terms', () => {
    props.searchTerm = 'the search term';
    props.searchPostcode = 'NN1 1AA';

    const { getByPlaceholderText } = renderComponent();

    const searchInput = getByPlaceholderText('Enter a search term');
    const postcodeInput = getByPlaceholderText('Enter a postcode');

    expect(searchInput).toHaveValue('the search term');
    expect(postcodeInput).toHaveValue('NN1 1AA');
  });
});
