import React from 'react';
import { render } from '@testing-library/react';
import PromoBanner from './PromoBanner';
import * as storydata from './PromoBanner.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('PromoBanner structure', () => {
  it('should render correctly', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <PromoBanner
            title={storydata.PromoBannerData.title}
            ctaText={storydata.PromoBannerData.ctaText}
            ctaUrl={storydata.PromoBannerData.ctaUrl}
            image1440x810={storydata.PromoBannerData.image1440x810}
            image144x81={storydata.PromoBannerData.image144x81}
          >
            {storydata.PromoBannerContent}
          </PromoBanner>
        </ThemeProvider>
      );

    const { getByText, getByRole, getAllByRole } = renderComponent();

    const h2 = getByRole('heading');
    expect(h2).toBeVisible();
    expect(h2).toHaveTextContent(storydata.PromoBannerData.title);

    const content = getByText(storydata.PromoBannerContentText);
    expect(content).toBeVisible();

    const links = getAllByRole('link');
    expect(links).toHaveLength(2);

    const images = getAllByRole('img');

    expect(links[0]).toHaveProperty('href', storydata.PromoBannerData.ctaUrl);
    expect(links[0]).toHaveTextContent('');
    expect(links[0]).toHaveProperty('title', storydata.PromoBannerData.ctaText);
    expect(links[0]).toHaveStyle('display: block;');
    expect(links[0]).toHaveStyle('width: 100%');

    expect(images).toHaveLength(1);
    expect(images[0]).toHaveAttribute('src', storydata.PromoBannerData.image1440x810);

    expect(links[1]).toHaveProperty('href', storydata.PromoBannerData.ctaUrl);
    expect(links[1]).toHaveTextContent(storydata.PromoBannerData.ctaText);
  });
});
