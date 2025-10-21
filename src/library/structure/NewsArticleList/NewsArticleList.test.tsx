import React from 'react';
import { render } from '@testing-library/react';
import NewsArticleList from './NewsArticleList';
import { NewsArticleListProps } from './NewsArticleList.types';
import { newsArticleData } from './NewsArticleData';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('News Article List', () => {
  let props: NewsArticleListProps;

  beforeEach(() => {
    props = newsArticleData;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <NewsArticleList {...props} />
      </ThemeProvider>
    );

  it('renders the results list', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('NewsArticleList');
    const articles = getAllByRole('link');

    expect(component).toBeVisible();

    expect(articles).toHaveLength(14);
  });
});
