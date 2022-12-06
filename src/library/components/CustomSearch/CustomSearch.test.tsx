import React from 'react';
import { render } from '@testing-library/react';
import CustomSearch from './CustomSearch';
import { CustomSearchProps } from './CustomSearch.types';
import { ExampleCustomSearchProps } from './CustomSearch.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('CustomSearch Component', () => {
  let props: CustomSearchProps;

  beforeEach(() => {
    props = ExampleCustomSearchProps;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CustomSearch {...props} />
      </ThemeProvider>
    );

  it('should render the custom search correctly', () => {
    const { getByTestId, getByPlaceholderText, getByRole } = renderComponent();

    const component = getByTestId('CustomSearch');
    const input = getByPlaceholderText('Search courses');
    const form = getByRole('form');

    expect(component).toBeVisible();
    expect(input).toHaveAttribute('name', 'keyword');

    expect(form).toHaveAttribute('method', 'post');
    expect(form).toHaveAttribute('action', 'https://courses.northantsglobal.net/CourseKeySearch.asp');
  });
});
