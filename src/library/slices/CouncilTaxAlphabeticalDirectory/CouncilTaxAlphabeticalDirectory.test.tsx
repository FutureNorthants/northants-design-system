import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CouncilTaxAlphabeticalDirectory from './CouncilTaxAlphabeticalDirectory';
import { CouncilTaxAlphabeticalDirectoryProps, ParishBands } from './CouncilTaxAlphabeticalDirectory.types';
import { exampleParishes } from './CouncilTaxAlphabeticalDirectory.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

let props: CouncilTaxAlphabeticalDirectoryProps = {
  financialYear: '2022/23',
  parishes: exampleParishes,
};

describe('Council Tax Alphabetical Directory', () => {
  beforeEach(() => {
    props = {
      financialYear: '2022/23',
      parishes: exampleParishes,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CouncilTaxAlphabeticalDirectory {...props} />
      </ThemeProvider>
    );

  it('should display the error message when no parishes returned', async () => {
    props.parishes = [];

    const { getByTestId } = renderComponent();

    const component = getByTestId('AlphabeticalDirectory');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('There was an issue fetching the parish data. Please try again later.');
  });

  it('should display the parishes', async () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('AlphabeticalDirectory');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Abthorpe');
    expect(component).toHaveTextContent('Brixworth');
  });

  it('should display the bands when the parish name is clicked, then hide when back is clicked', async () => {
    const { getByTestId, getByText } = renderComponent();
    const component = getByTestId('AlphabeticalDirectory');

    expect(component).not.toHaveTextContent('Council tax charges for Abthorpe in 2022/23');

    fireEvent.click(getByText('Abthorpe'));

    expect(component).toHaveTextContent('Council tax charges for Abthorpe');
    expect(component).toHaveTextContent('Bands');
    expect(component).toHaveTextContent('A');
    expect(component).toHaveTextContent('£1,319.87');
    expect(component).toHaveTextContent('E');
    expect(component).toHaveTextContent('£2,419.75');

    fireEvent.click(getByText('Back'));

    expect(component).not.toHaveTextContent('Council tax charges for Abthorpe');
  });
});
