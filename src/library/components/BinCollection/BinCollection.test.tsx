import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BinCollection from './BinCollection';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import axios from 'axios';
import { addressMockData } from './BinCollection.testdata';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BinCollection', () => {

  const renderComponent = () => 
    render(
      <ThemeProvider theme={west_theme}>
        <BinCollection />
      </ThemeProvider>
    );

  it('should render the component and show error for empty postcode', () => {
    const { getByText, getByTestId } = renderComponent();
    const submitButton = getByText('Find');

    fireEvent.click(submitButton);

    const binCollectionComponent = getByTestId('BinCollection');
    expect(binCollectionComponent).toHaveTextContent('You need to enter a postcode');
  });

  it('should fetch addresses for a given postcode and populate the dropdown with UPRNs', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: addressMockData['NN16 9XR'] });
  
    const { getByPlaceholderText, getByRole, getByText } = renderComponent();
    const postcodeInput = getByPlaceholderText('Enter a postcode');
    const submitButton = getByText('Find');
  
    fireEvent.change(postcodeInput, { target: { value: 'NN16 9XR' } });
    fireEvent.click(submitButton);
  
    await waitFor(() => {
      const dropDown = getByRole('combobox') as HTMLSelectElement;
  
      // Check that the dropdown has the UPRN values
      addressMockData['NN16 9XR'].data.forEach(address => {
        const optionWithValue = Array.from(dropDown.options).find(option => option.value === address.UPRN);
        expect(optionWithValue).toBeDefined();
      });
    });
  });
  
});
