import React from 'react';
import { render } from '@testing-library/react';
import Video from './Video';
import { VideoProps, VideoProvider } from './Video.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import { cookieName } from './../../helpers/cookies';

describe('Video Component', () => {
  it('should render a link when cookies are not accepted', () => {
    let props: VideoProps = {
      video_id: 'videoId',
      provider: VideoProvider.YouTube,
      description: 'The video description',
      allowCookies: false,
    };

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Video {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    const component = getByTestId('VideoLink');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('The video description');
    expect(component).toHaveAttribute('href', 'https://www.youtube.com/watch?v=videoId');
    expect(component).toHaveAttribute('title', 'The video description');
  });

  it('should render embedded player when allowCookies is true', () => {
    let props: VideoProps = {
      video_id: 'videoId',
      provider: VideoProvider.YouTube,
      description: 'The video description',
      allowCookies: true,
    };

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Video {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    const component = getByTestId('Video');

    expect(component).toBeVisible();

    const iframe = getByTestId('VideoIframe');
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/videoId?rel=0');
    expect(iframe).toHaveAttribute('title', 'The video description');
  });

  it('should render a vimeo player when allow cookies is true', () => {
    let props: VideoProps = {
      video_id: 'vimeoId',
      provider: VideoProvider.Vimeo,
      description: 'The video description',
      allowCookies: true,
    };

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Video {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    const component = getByTestId('Video');

    expect(component).toBeVisible();

    const iframe = getByTestId('VideoIframe');
    expect(iframe).toHaveAttribute('src', 'https://player.vimeo.com/video/vimeoId');
    expect(iframe).toHaveAttribute('title', 'The video description');
    expect(iframe).toHaveAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
    );
  });

  it('should detect cookie being set to display video', () => {
    let props: VideoProps = {
      video_id: 'vimeoId',
      provider: VideoProvider.Vimeo,
      description: 'The video description',
    };

    // Create cookie with cookiesAccepted: true
    let date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);

    let cookie = {
      bannerDismissed: true,
      cookiesAccepted: true,
      cookiesAcceptedConfirmationBanner: false,
      cookieCreated: date.toUTCString(),
    };
    document.cookie = `${cookieName}=${JSON.stringify(cookie)};expires=${date.toUTCString()};path=/`;

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Video {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    const iframe = getByTestId('VideoIframe');
    expect(iframe).toBeVisible();
    expect(iframe).toHaveAttribute('src', 'https://player.vimeo.com/video/vimeoId');
  });
});
