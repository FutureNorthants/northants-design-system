import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from './SearchBox';
import { SearchBoxProps } from './SearchBox.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import { ExampleSearchBoxProps } from './SearchBox.storydata';

describe('SearchBox Component', () => {
  let props: SearchBoxProps;

  beforeEach(() => {
    props = ExampleSearchBoxProps;
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
    const input = getByPlaceholderText('Search courses');
    const form = getByRole('form');
    const link = getByRole('link');
    const heading = getByRole('heading');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Search for courses');
    expect(input).toHaveAttribute('name', 'keyword');

    expect(form).toHaveAttribute('method', 'post');
    expect(form).toHaveAttribute('action', 'https://courses.northantsglobal.net/CourseKeySearch.asp');

    expect(link).toHaveTextContent('View all courses');
    expect(link).toHaveAttribute('href', 'https://courses.northantsglobal.net/AvailableCoursesList.asp');

    expect(heading).toHaveTextContent('Search adult learning courses');
  });

  it('should render the search box link as secondary button', () => {
    props.searchBoxLinkIsPrimary = false;

    const { getByRole } = renderComponent();

    const link = getByRole('link');

    expect(link).toHaveStyle('background-color: transparent;');
  });
});
