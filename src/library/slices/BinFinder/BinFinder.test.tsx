import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import BinFinder from './BinFinder';
import { BinFinderProps } from './BinFinder.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios.get as jest.MockedFunction<typeof axios.get>;

describe('Test Component', () => {
  let props: BinFinderProps;

  beforeEach(() => {
    props = {
      title: 'Bin Finder',
      contactUrl: 'https://www.westnorthants.gov.uk/your-council/contact-us/contact-details',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BinFinder {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BinFinder');

    expect(component).toHaveTextContent('Bin Finder');
  });

  it('should error for empty postcode', async () => {
    const { getByTestId, getByLabelText, getByRole } = renderComponent();

    const postcodeInput = getByLabelText('Postcode');
    const submit = getByRole('button');

    fireEvent.click(submit);

    await waitFor(() => {
      const component = getByTestId('BinFinder');
      expect(postcodeInput).toHaveStyle(`border: solid ${west_theme.theme_vars.colours.negative}`);
      expect(component).toHaveTextContent('The postcode is required.');
    });
  });

  it('should search for a postcode, find one result and display the bin collections', async () => {
    mockedAxios
      .mockImplementationOnce(() => {
        return Promise.resolve({
          statusText: 'Ok',
          headers: {},
          config: {},
          status: 200,
          data: {
            sovereigns: [
              {
                name: 'Northampton',
                website: '',
              },
            ],
            unitaries: [
              {
                name: 'West',
              },
            ],
            addresses: [
              {
                single_line_address: 'West Northamptonshire Council, One Angel Square, Northampton, NN1 1ED',
                sovereign: 'Northampton',
                unitary: 'West',
                uprn: '15049534',
              },
            ],
          },
        });
      })
      .mockImplementationOnce(() => {
        return Promise.resolve({
          statusText: 'Ok',
          headers: {},
          config: {},
          status: 200,
          data: {
            unitary: 'West',
            sovereign: 'Northampton',
            uprn: '15049534',
            calendar: 'https://example.com/calendar.pdf',
            collectionItems: [
              {
                date: '2024-02-12',
                type: 'food',
              },
              {
                date: '2024-02-20',
                type: 'recycling',
              },
            ],
          },
        });
      });

    const { getByTestId, getByRole, getByLabelText } = renderComponent();

    const postcodeInput = getByLabelText('Postcode');
    const submit = getByRole('button');

    fireEvent.change(postcodeInput, { target: { value: 'NN1 1ED' } });

    fireEvent.click(submit);

    await waitFor(() => {
      const component = getByTestId('BinFinder');
      expect(component).toHaveTextContent(
        'Bin collections for:West Northamptonshire Council, One Angel Square, Northampton, NN1 1ED'
      );
      expect(component).toHaveTextContent('Food Caddy');
      expect(component).toHaveTextContent('Monday 12 February 2024');
      expect(component).toHaveTextContent('Recycling');
      expect(component).toHaveTextContent('Tuesday 20 February 2024');
    });
  });

  it('should find multiple addresses and display the select', async () => {
    mockedAxios.mockImplementationOnce(() => {
      return Promise.resolve({
        statusText: 'Ok',
        headers: {},
        config: {},
        status: 200,
        data: {
          sovereigns: [
            {
              name: 'Northampton',
              website: '',
            },
          ],
          unitaries: [
            {
              name: 'West',
            },
          ],
          addresses: [
            {
              single_line_address: 'West Northamptonshire Council, One Angel Square, Northampton, NN1 1ED',
              sovereign: 'Northampton',
              unitary: 'West',
              uprn: '15049534',
            },
            {
              single_line_address: 'North Northamptonshire Council, One Angel Square, Northampton, NN1 1ED',
              sovereign: 'Northampton',
              unitary: 'West',
              uprn: '15049535',
            },
          ],
        },
      });
    });

    const { getByTestId, getByRole, getByLabelText } = renderComponent();

    const postcodeInput = getByLabelText('Postcode');
    const submit = getByRole('button');

    fireEvent.change(postcodeInput, { target: { value: 'NN1 1ED' } });
    fireEvent.click(submit);

    await waitFor(() => {
      const component = getByTestId('BinFinder');

      expect(component).toHaveTextContent('Select your address');
      expect(component).toHaveTextContent('West Northamptonshire Council, One Angel Square, Northampton, NN1 1ED');
      expect(component).toHaveTextContent('North Northamptonshire Council, One Angel Square, Northampton, NN1 1ED');
    });
  });
});
