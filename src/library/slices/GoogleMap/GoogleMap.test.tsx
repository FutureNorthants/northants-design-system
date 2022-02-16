import React from 'react';
import { render } from '@testing-library/react';
import GoogleMap from './GoogleMap';
import * as storydata from './GoogleMap.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('GoogleMap slice', () => {
  it('should render an iframe when cookies accepted, title and description when they are provided', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <GoogleMap allowCookies={true} {...storydata.GoogleMapWithTitleAndDescription} />
        </ThemeProvider>
      );

    const { getByText, getByRole, getByTestId } = renderComponent();

    const h3 = getByRole('heading');
    expect(h3).toBeVisible();
    expect(h3).toHaveTextContent(storydata.GoogleMapWithTitleAndDescription.title);

    const content = getByText(storydata.GoogleMapWithTitleAndDescription.description);
    expect(content).toBeVisible();

    const container = getByTestId('GoogleMapContainer');
    expect(container).toBeVisible();

    const iframe = getByTestId('GoogleMapIframe');
    expect(iframe).toBeVisible();

    expect(storydata.GoogleMapWithTitleAndDescription.iframe_html).toContain(iframe.getAttribute('src'));
  });

  it('should render a link when cookies not accepted, with no title and description when they are not provided', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <GoogleMap {...storydata.GoogleMapNoTitleOrDescription} allowCookies={false} />
        </ThemeProvider>
      );

    const { queryByText, queryByRole, getByRole, queryByTestId } = renderComponent();

    const h3 = queryByRole('heading');
    expect(h3).toBeNull();

    const content = queryByText(storydata.GoogleMapWithTitleAndDescription.description);
    expect(content).toBeNull();

    const container = queryByTestId('GoogleMapContainer');
    expect(container).toBeNull();

    const iframe = queryByTestId('GoogleMapIframe');
    expect(iframe).toBeNull();

    const link = getByRole('link');
    expect(link).toBeVisible();
    expect(link).toHaveTextContent(storydata.GoogleMapNoTitleOrDescription.link_title);
  });

  it('should object to links that are not to google maps', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <GoogleMap {...storydata.GoogleMapWithInvalidLinks} />
        </ThemeProvider>
      );

    const { getByTestId, queryByTestId, queryByRole } = renderComponent();

    const alert = getByTestId('AlertBannerService');
    expect(alert).toBeVisible();
    expect(alert).toHaveTextContent('Embedded map contains invalid');

    const iframe = queryByTestId('GoogleMapIframe');
    expect(iframe).toBeNull();

    const link = queryByRole('link');
    expect(link).toBeNull();

  });
});
