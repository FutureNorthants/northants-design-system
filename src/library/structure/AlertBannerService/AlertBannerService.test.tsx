import React from 'react';
import { render } from '@testing-library/react';
import AlertBannerService from './AlertBannerService';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Alert Service Banner', () => {
  it('should render the title and content', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <AlertBannerService title="The title">
            <p>This is some content.</p>
          </AlertBannerService>
        </ThemeProvider>
      );

    const { getByRole, getByTestId } = renderComponent();

    expect(getByRole('heading')).toHaveTextContent('The title');
    expect(getByTestId('AlertBannerServiceInner')).toHaveTextContent('This is some content');
    expect(getByTestId('AlertBannerService')).toHaveStyle(`border-color: ${west_theme.theme_vars.colours.negative}`);
  });

  it('should render as warning', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <AlertBannerService title="The title" alertType="warning">
            <p>This is some content.</p>
          </AlertBannerService>
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();

    expect(getByTestId('AlertBannerService')).toHaveStyle(`border-color: ${west_theme.theme_vars.colours.focus}`);
  });

  it('should render as positive', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <AlertBannerService title="The title" alertType="positive">
            <p>This is some content.</p>
          </AlertBannerService>
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();

    expect(getByTestId('AlertBannerService')).toHaveStyle(`border-color: ${west_theme.theme_vars.colours.positive}`);
  });

  it('should render as london bridge', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <AlertBannerService title="The title" alertType="london_bridge">
            <p>This is some content.</p>
          </AlertBannerService>
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();

    expect(getByTestId('AlertBannerService')).toHaveStyle(`border-color: ${west_theme.theme_vars.colours.black}`);
  });

  it('should not add a heading if title is empty', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <AlertBannerService title="">
            <p>This is some content.</p>
          </AlertBannerService>
        </ThemeProvider>
      );

    const { queryByRole } = renderComponent();

    expect(queryByRole('heading')).toBeNull();
  });
});
