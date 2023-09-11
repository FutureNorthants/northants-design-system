import React from 'react';
import { ThemeProvider } from 'styled-components';
import { searchResults } from './SearchResultsData';
import SearchResultsList from './SearchResultsList';
import { SearchResultsListProps } from './SearchResultsList.types';
import { north_theme, west_theme } from '../../../themes/theme_generator';
import { render } from '@testing-library/react';

describe('SearchResultsList - West', () => {
  let props: SearchResultsListProps;

  beforeEach(() => {
    props = searchResults;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SearchResultsList {...props} />
      </ThemeProvider>
    );

  it('hides the signpost links for West', () => {
    const { queryByText } = renderComponent();

    expect(queryByText('Corby')).toBeNull();
    expect(queryByText('Select your local area for information:')).toBeNull();
    expect(queryByText('Go straight to the information:')).toBeNull();
  });
});

describe('SearchResultsList - North', () => {
  let props: SearchResultsListProps;

  beforeEach(() => {
    props = searchResults;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={north_theme}>
        <SearchResultsList {...props} />
      </ThemeProvider>
    );

  it('shows the signpost links for North', () => {
    const { getByTestId, getByText } = renderComponent();

    const component = getByTestId('SearchResultsList');
    const signpostLinkCorby = getByText('Corby');

    expect(component).toHaveTextContent('Select your local area for information:');
    expect(component).toHaveTextContent('Go straight to the information:');

    expect(signpostLinkCorby).toBeVisible();
    expect(signpostLinkCorby).toHaveAttribute('href', '/');
    expect(signpostLinkCorby).toHaveAttribute('title', 'Corby (this link will take you to an external website)');
  });
});
