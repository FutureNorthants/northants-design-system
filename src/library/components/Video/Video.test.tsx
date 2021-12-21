import React from 'react';
import { render } from '@testing-library/react';
import Video from './Video';
import { VideoProps, VideoProvider } from './Video.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

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

  it('should render embedded player when cookies are accepted', () => {
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
    expect(iframe).toHaveAttribute('title', 'YouTube video player');
  });

  it('should render a vimeo player', () => {
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
    expect(iframe).toHaveAttribute('allow', 'autoplay; fullscreen; picture-in-picture; fullscreen');
  });
});
