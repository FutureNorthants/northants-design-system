import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { DirectoryFavouritesProvider } from '../../contexts/DirectoryFavouritesProvider/DirectoryFavouritesProvider';

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
      categories: [
        {
          label: 'Filter by category',
          vocabulary: 'colours',
          options: [
            {
              id: 'colours:1',
              name: 'Green',
              vocabulary: 'colours',
              checked: false,
            },
            {
              id: 'colours:2',
              name: 'Blue',
              vocabulary: 'colours',
              checked: false,
            },
            {
              id: 'colours:3',
              name: 'Red',
              vocabulary: 'colours',
              checked: true,
            },
          ],
          singleSelection: false,
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryFavouritesProvider>
          <DirectoryServiceList {...props} />
        </DirectoryFavouritesProvider>
      </ThemeProvider>
    );

  it('should render service results correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryServiceList');

    expect(component).toHaveTextContent(ExampleService.name);
    expect(component).toHaveTextContent('Showing 1 to 1 out of 1');
    expect(component).toHaveTextContent(
      'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to residents and businesses in the areas of Daventry,…'
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

  it('should render correctly when no search results returned', () => {
    props.services = [];
    props.pageNumber = 0;
    props.perPage = 5;
    props.totalResults = 0;

    const { getByTestId } = renderComponent();
    const component = getByTestId('DirectoryServiceList');

    expect(component).not.toHaveTextContent('Showing 0 to 0 out of 0');
    expect(component).toHaveTextContent('No results found');
  });

  it('should render the categories', () => {
    const { getByLabelText, getAllByRole, getByText } = renderComponent();
    const legend = getByText('Filter by category');

    expect(legend).toBeVisible();
    expect(getByText('Green')).not.toBeVisible();

    fireEvent.click(legend);

    const checkboxes = getAllByRole('checkbox');
    const redCheckbox = getByLabelText('Red');
    const greenCheckbox = getByLabelText('Green');

    expect(checkboxes).toHaveLength(3);
    expect(redCheckbox).toBeChecked();
    expect(greenCheckbox).not.toBeChecked();

    fireEvent.click(redCheckbox);

    expect(redCheckbox).not.toBeChecked();
  });
});
