import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Pagination', () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      currentPage: 1,
      totalResults: 100,
      resultsPerPage: 10,
    };
  });

  const renderComponent = () => {
    return render(
      <ThemeProvider theme={west_theme}>
        <Pagination {...props}></Pagination>
      </ThemeProvider>
    );
  };

  /* given array of expected button texts, expect *only* to find those buttons */
  const checkButtons = (expected) => {
    const { queryAllByRole, getByText } = renderComponent();
    let buttonCount = 0;

    expected.forEach((value, index) => {
      const element = getByText(value);
      expect(element).toBeVisible();
      if (value === '...') {
        expect(element).not.toBeInstanceOf(HTMLButtonElement);
      } else {
        expect(element).toBeInstanceOf(HTMLButtonElement);
        buttonCount++;
      }
    });

    /* any more than counted is a fail */
    const buttons = queryAllByRole('button');
    expect(buttons).toHaveLength(buttonCount);
  };

  it('should not render the pagination if no pages', () => {
    props.totalResults = 0;
    checkButtons([]);
  });

  it('should render the pagination correctly on first page', () => {
    checkButtons(['1', '2', '3', '...', '10', 'Next']);
  });

  it('should render the pagination correctly on second page', () => {
    props.currentPage = 2;
    checkButtons(['Previous', '1', '2', '3', '4', '...', '10', 'Next']);
  });

  it('should render the pagination correctly on middle page', () => {
    props.currentPage = 5;
    checkButtons(['Previous', '1', '2', '3', '4', '5', '6', '7', '...', '10', 'Next']);
  });

  it('should render the pagination correctly on middle page plus one', () => {
    props.currentPage = 6;
    checkButtons(['Previous', '1', '...', '4', '5', '6', '7', '8', '9', '10', 'Next']);
  });

  it('should render the pagination correctly on last page', () => {
    props.currentPage = 10;
    checkButtons(['Previous', '1', '...', '8', '9', '10']);
  });
});
