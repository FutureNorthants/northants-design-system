import React from 'react';
import { VideoProps, VideoProvider } from './Video.types';
import * as Styles from './Video.styles';

/**
 * A responsive video embed for YouTube or Vimeo
 */
const Video: React.FunctionComponent<VideoProps> = ({ video_id, provider }) => (
  <Styles.VideoContainer data-testid="Video">
    {provider == VideoProvider.YouTube && (
      <iframe
        src={`https://www.youtube.com/embed/${video_id}?rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
      ></iframe>
    )}
    {provider == VideoProvider.Vimeo && (
      <iframe
        src={`https://player.vimeo.com/video/${video_id}`}
        allow="autoplay; fullscreen; picture-in-picture; fullscreen"
      ></iframe>
    )}
  </Styles.VideoContainer>
);

export default Video;
