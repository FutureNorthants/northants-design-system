import React from 'react';

import { VideoProps } from './Video.types';
import * as Styles from './Video.styles';

const Video: React.FC<VideoProps> = ({ youtube_id }) => (
  <Styles.VideoContainer data-testid="Video">
    <iframe
      src={`https://www.youtube.com/embed/${youtube_id}?rel=0`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Styles.VideoContainer>
);

export default Video;
