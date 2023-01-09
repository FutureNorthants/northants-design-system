import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

describe('Test Component', () => {
  let props: DirectoryServiceListProps;

  beforeEach(() => {
    props = {
      directoryPath: '/directory',
      shortListPath: '/directory/short-list',
      services: [ExampleService],
      totalResults: 1,
      pageNumber: 1,
      search: 'council',
      setSearch: () => {},
      postcode: 'NN1 1ED',
      setPostcode: () => {},
      minimumAge: '5',
      setMinimumAge: () => {},
      maximumAge: '100',
      setMaximumAge: () => {},
      setCategories: () => {},
      isLoading: false,
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
        <DirectoryShortListProvider>
          <DirectoryServiceList {...props} />
        </DirectoryShortListProvider>
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
    props.search = 'the search term';
    props.postcode = 'NN1 1AA';

    const { getByLabelText } = renderComponent();

    const searchInput = getByLabelText('What are you looking for?');
    const postcodeInput = getByLabelText('Postcode');

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
    const filterToggle = getByText('Show Filters');

    expect(legend).not.toBeVisible();

    fireEvent.click(filterToggle);

    expect(legend).toBeVisible();
    expect(getByText('Green')).not.toBeVisible();

    fireEvent.click(legend);

    const checkboxes = getAllByRole('checkbox');
    const redCheckbox = getByLabelText('Red');
    const greenCheckbox = getByLabelText('Green');

    expect(checkboxes).toHaveLength(3);
    expect(redCheckbox).toBeChecked();
    expect(greenCheckbox).not.toBeChecked();
  });

  it('saves a service as a favourite and removes it', () => {
    const { getByText } = renderComponent();

    expect(getByText('Shortlist (0)')).toBeVisible();

    fireEvent.click(getByText('Add to shortlist'));

    expect(getByText('Shortlist (1)')).toBeVisible();

    fireEvent.click(getByText('Remove from shortlist'));

    expect(getByText('Shortlist (0)')).toBeVisible();
  });

  it('should show the loading spinner when loading', () => {
    props.isLoading = true;

    const { getByText } = renderComponent();

    expect(getByText('Loading')).toBeVisible();
  });
});
