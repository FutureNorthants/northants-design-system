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

  it('should render the custom ID correctly', () => {
    props.id = 'aCustomId';

    const { getByPlaceholderText, getByText } = renderComponent();

    const input = getByPlaceholderText('Search courses');
    expect(input).toHaveAttribute('id', 'aCustomId');

    const label = getByText('Search for courses', { selector: 'label' });
    expect(label).toHaveAttribute('for', 'aCustomId');
  });
});
