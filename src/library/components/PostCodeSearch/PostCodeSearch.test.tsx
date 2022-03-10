import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PostCodeSearch from './PostCodeSearch';
import { PostCodeSearchProps } from './PostCodeSearch.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('PostCodeSearch', () => {
  let props: PostCodeSearchProps;

  beforeEach(() => {
    props = {
      title: 'Enter your postcode to find your area',
      otherCouncilLink: 'https://www.northnorthants.gov.uk',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PostCodeSearch {...props} />
      </ThemeProvider>
    );

  it('should render the component and open the search', () => {
    const { getByTestId, queryByPlaceholderText, getByText } = renderComponent();

    const component = getByTestId('PostCodeSearch');
    const searchInput = queryByPlaceholderText('Search postcode');
    const expandButton = getByText(props.title);

    expect(component).toBeVisible();
    expect(expandButton).toBeVisible();
    expect(searchInput).toBeNull();

    fireEvent.click(expandButton);

    expect(queryByPlaceholderText('Enter a postcode')).toBeVisible();
  });

  it('should error with empty postcode', () => {
    const { getByTestId, getByPlaceholderText, getByText, getByRole } = renderComponent();
    const component = getByTestId('PostCodeSearch');
    const expandButton = getByText(props.title);

    fireEvent.click(expandButton);
    const searchInput = getByPlaceholderText('Enter a postcode');

    fireEvent.change(searchInput, { target: { value: '' } });

    fireEvent.submit(getByTestId('FormWithLine'));

    expect(component).toHaveTextContent('You need to enter a postcode');
  });

  it('should display an error for incorrect postcode', async () => {
    mockedAxios.mockResolvedValue({
      status: 200,
      data: 'Incorrect postcode',
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    const { getByTestId, getByPlaceholderText, getByText, getByRole } = renderComponent();
    const component = getByTestId('PostCodeSearch');
    const expandButton = getByText(props.title);

    fireEvent.click(expandButton);
    const searchInput = getByPlaceholderText('Enter a postcode');

    fireEvent.change(searchInput, { target: { value: 'FAKE POSTCODE' } });

    fireEvent.submit(getByTestId('FormWithLine'));

    await waitFor(() => {
      expect(component).toHaveTextContent(
        'There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new postcodes.'
      );
    });
  });

  it('should find a postcode', async () => {
    mockedAxios.mockResolvedValue({
      statusText: 'Ok',
      headers: {},
      config: {},
      status: 200,
      data: {
        numOfSovereign: 1,
        sovereign: [
          {
            sovereignName: 'Kettering',
            sovereignCode: 4,
          },
        ],
        numOfUnitary: 1,
        unitary: [
          {
            unitary: 'North',
            unitaryCode: 1,
          },
        ],
        addresses: [
          {
            DPA: {
              ADDRESS: '123, EXAMPLE ROAD, KETTERING, NORTH POSTCODE',
              SOVEREIGN_COUNCIL_CODE: 4,
              SOVEREIGN_COUNCIL_NAME: 'Kettering',
              UNITARY_COUNCIL_NAME: 'North',
              UPRN: '12345678910',
            },
          },
        ],
      },
    });

    const { getByTestId, getByPlaceholderText, getByText, getByRole } = renderComponent();
    const component = getByTestId('PostCodeSearch');
    const expandButton = getByText(props.title);

    fireEvent.click(expandButton);
    const searchInput = getByPlaceholderText('Enter a postcode');

    fireEvent.change(searchInput, { target: { value: 'NORTH POSTCODE' } });

    fireEvent.submit(getByTestId('FormWithLine'));

    await waitFor(() => {
      expect(component).toHaveTextContent(
        'This postcode NORTH POSTCODE is in North Northamptonshire, in the Kettering area.'
      );
      expect(component).toHaveTextContent(
        'In order to find the right information for you, please visit the North Northamptonshire website and find your local area (Kettering) for this service'
      );

      const councilLink = getByRole('link');

      expect(councilLink).toHaveAttribute('href', west_theme.theme_vars.other_council_link);
      expect(councilLink).toHaveTextContent("Go to North Northamptonshire's website");
    });
  });
});
