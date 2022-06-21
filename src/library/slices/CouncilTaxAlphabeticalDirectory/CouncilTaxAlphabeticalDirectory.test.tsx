import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import CouncilTaxAlphabeticalDirectory from './CouncilTaxAlphabeticalDirectory';
import { CouncilTaxAlphabeticalDirectoryProps, ParishBands } from './CouncilTaxAlphabeticalDirectory.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;

const bands: ParishBands = {
  a: '1121.01',
  b: '1122.02',
  c: '1123.03',
  d: '1124.04',
  e: '1125.05',
  f: '1126.06',
  g: '1127.07',
  h: '1128.08',
};

const mockedResponse = {
  records_in_payload: 2,
  status: '200:Ok',
  total_records: 2,
  unitary: 'West',
  parishes: [
    {
      banding_parish: 'Example Parish',
      bands: bands,
      code: 'ABC123',
      official_parish: 'Example Parish CP',
      unitary: 'West',
    },
    {
      banding_parish: 'Another Parish',
      bands: bands,
      code: 'ABC123',
      official_parish: 'Another Parish CP',
      unitary: 'West',
    },
  ],
};

const props: CouncilTaxAlphabeticalDirectoryProps = {
  financialYear: '2022/23',
};

describe('Council Tax Alphabetical Directory', () => {
  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CouncilTaxAlphabeticalDirectory {...props} />
      </ThemeProvider>
    );

  it('should display the error message when no parishes returned', async () => {
    mockedAxios.mockResolvedValue({
      status: 200,
      data: {},
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    const { getByTestId } = renderComponent();

    const component = getByTestId('AlphabeticalDirectory');

    await waitFor(() => {
      expect(mockedAxios).toHaveBeenCalledTimes(1);
      expect(component).toBeVisible();
      expect(component).toHaveTextContent('There was an issue fetching the parish data. Please try again later.');
    });
  });

  it('should display the parishes', async () => {
    mockedAxios.mockResolvedValue({
      status: 200,
      data: mockedResponse,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    const { getByTestId } = renderComponent();

    const component = getByTestId('AlphabeticalDirectory');

    await waitFor(() => {
      expect(component).toBeVisible();
      expect(component).toHaveTextContent('Example Parish');
      expect(component).toHaveTextContent('Another Parish');
    });
  });

  it('should display the bands when the parish name is clicked, then hide when back is clicked', async () => {
    mockedAxios.mockResolvedValue({
      status: 200,
      data: mockedResponse,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    const { getByTestId, getByText } = renderComponent();
    const component = getByTestId('AlphabeticalDirectory');

    await waitFor(() => {
      expect(component).not.toHaveTextContent('Council tax charges for Example Parish in 2022/23');

      fireEvent.click(getByText('Example Parish'));

      expect(component).toHaveTextContent('Council tax charges for Example Parish');
      expect(component).toHaveTextContent('Bands');
      expect(component).toHaveTextContent('A');
      expect(component).toHaveTextContent('£1,121.01');
      expect(component).toHaveTextContent('E');
      expect(component).toHaveTextContent('£1,125.05');

      fireEvent.click(getByText('Back'));

      expect(component).not.toHaveTextContent('Council tax charges for Example Parish');
    });
  });
});
