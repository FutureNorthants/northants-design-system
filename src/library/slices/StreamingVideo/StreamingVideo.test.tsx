import React from 'react';
import { render } from '@testing-library/react';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

import StreamingVideo from './StreamingVideo';
import { StreamingVideoProps } from './StreamingVideo.types';

describe('StreamingVideo', () => {
  let props: StreamingVideoProps;

  beforeEach(() => {
    props = {
      src: 'http://localhost/video/output.m3u8',
      title: 'Test title',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <StreamingVideo {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('StreamingVideo');
    const video = component.getElementsByClassName('video-js');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Test title');
    expect(video.length).toBe(1);
  });
});
