import React from 'react';
import { render } from '@testing-library/react';
import NewsArticleFeaturedBlock from './NewsArticleFeaturedBlock';
import * as storydata from './NewsArticleFeaturedBlock.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('NewsArticleFeaturedBlock structure', () => {
  it('should render correctly with everything on', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <NewsArticleFeaturedBlock articles={storydata.NewsArticleData} viewAllLink={'/'} />
        </ThemeProvider>
      );

    const { getByText, getByRole, getAllByRole } = renderComponent();

    const h2 = getByRole('heading');
    expect(h2).toBeVisible();
    expect(h2).toHaveTextContent('News articles and press releases');

    const links = getAllByRole('link');
    expect(links).toHaveLength(storydata.NewsArticleData.length + 1);
    links.forEach((link, index) => {
      if (index < storydata.NewsArticleData.length) {
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href', storydata.NewsArticleData[index].url);
      } else {
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href', '/');
      }
    });

    const imageSpans = getAllByRole('img');
    expect(imageSpans).toHaveLength(storydata.NewsArticleData.length);
    imageSpans.forEach((imageSpan, index) => {
      expect(imageSpan).toBeVisible();
      expect(imageSpan).toHaveAttribute('src', storydata.NewsArticleData[index].image720x405);
      if (storydata.NewsArticleData[index].imageAltText) {
        expect(imageSpan).toHaveAttribute('alt', storydata.NewsArticleData[index].imageAltText);
      } else {
        expect(imageSpan).toHaveAttribute('aria-label', '');
      }

      const para = getByText(storydata.NewsArticleData[index].title);
      expect(para).toBeVisible();
    });
  });

  it('should render correctly with everything off', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <NewsArticleFeaturedBlock articles={[]} withoutTitle />
        </ThemeProvider>
      );

    const { queryByRole, queryAllByRole } = renderComponent();

    const h2 = queryByRole('heading');
    expect(h2).toBeNull();

    const links = queryAllByRole('link');
    expect(links).toHaveLength(0);

    const imageSpans = queryAllByRole('img');
    expect(imageSpans).toHaveLength(0);
  });
});
