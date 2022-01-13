import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from './Autocomplete';
import {
  EmptyWithHiddenLabelData,
  NoMatchingSuggestionEnlargedWithHiddenLabelData,
  DisplayingSuggestionsData,
  SuggestionChosenData,
} from './Autocomplete.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Autocomplete component', () => {
  it('should render a hidden label and empty input', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Autocomplete {...EmptyWithHiddenLabelData} />
        </ThemeProvider>
      );

    const { getByText, getByPlaceholderText } = renderComponent();

    const input = getByPlaceholderText('Enter search text');
    expect(input).toBeVisible();
    expect(input).toHaveValue('');

    const label = getByText('This is a hidden label');
    expect(label).toHaveStyle('clip: rect(0 0 0 0)'); // toBeVisible sadly doesn't work
  });

  it('should render with non-empty input and no suggestions', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Autocomplete {...NoMatchingSuggestionEnlargedWithHiddenLabelData} />
        </ThemeProvider>
      );

    const { getByPlaceholderText, queryByRole } = renderComponent();

    const input = getByPlaceholderText('Enter search text');
    expect(input).toBeVisible();
    expect(input).toHaveValue('Banana');

    const list = queryByRole('listbox');
    expect(list).toBeNull;
  });

  it('should render a visible label, non-empty input and 2 visible suggestions', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Autocomplete {...DisplayingSuggestionsData} />
        </ThemeProvider>
      );

    const { getByPlaceholderText, getByText, getByRole, getAllByRole } = renderComponent();

    const input = getByPlaceholderText('Enter search text');
    expect(input).toBeVisible();
    expect(input).toHaveValue('Pe');

    const label = getByText('Enter search text');
    expect(label).toHaveStyle('display: inline-block');

    const list = getByRole('listbox');
    expect(list).toBeVisible();
    const items = getAllByRole('option');
    const matches = items.map((item) => item.textContent);
    expect(matches).toEqual(['Pear', 'Peach']);
    expect(items[0]).toBeVisible();
    expect(items[1]).toBeVisible();
  });

  it('should render non-empty input and no visible suggestions', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Autocomplete {...SuggestionChosenData} />
        </ThemeProvider>
      );

    const { getByPlaceholderText, getByText, queryByRole } = renderComponent();

    const input = getByPlaceholderText('Enter search text');
    expect(input).toBeVisible();
    expect(input).toHaveValue('Peach');

    const label = getByText('Enter search text');
    expect(label).toHaveStyle('display: inline-block');

    const list = queryByRole('listbox');
    expect(list).toBeNull;
  });
});
