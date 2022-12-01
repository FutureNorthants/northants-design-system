import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from './SearchBox';
import { SearchBoxProps } from './SearchBox.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('SearchBox Component', () => {
  let props: SearchBoxProps;

  beforeEach(() => {
    props = {
      label: 'Search for courses label',
      method: 'get',
      fieldName: 'search_field',
      path: '/test',
      searchText: 'Search',
      placeholder: 'Search for courses',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SearchBox {...props} />
      </ThemeProvider>
    );

  it('should render search box correctly', () => {
    const { getByTestId, getByPlaceholderText, getByRole } = renderComponent();

    const component = getByTestId('SearchBox');
    const input = getByPlaceholderText('Search for courses');
    const form = getByRole('form');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Search for courses label');
    expect(input).toHaveAttribute('name', 'search_field');

    expect(form).toHaveAttribute('method', 'get');
    expect(form).toHaveAttribute('action', '/test');
  });
});
