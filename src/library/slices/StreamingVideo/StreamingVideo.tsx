import React, { useEffect, useRef, useState } from 'react';
import { StreamingVideoProps } from './StreamingVideo.types';
import * as Styles from './StreamingVideo.styles';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Heading from '../../components/Heading/Heading';

/**
 * A component to stream live video feeds, such as HLS, using video.js
 */
const StreamingVideo: React.FunctionComponent<StreamingVideoProps> = ({
  src,
  type = 'application/x-mpegURL',
  title = null,
  autoplay = false,
  controls = true,
  responsive = true,
  fluid = true,
  onReady = null,
}) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(
          videoElement,
          {
            autoplay,
            controls,
            responsive,
            fluid,
          },
          () => {
            onReady && onReady;
          }
        )
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <Styles.Container data-testid="StreamingVideo">
      {title && <Heading text={title} level={2} />}
      <video className="video-js" ref={videoRef} controls>
        <source src={src} type={type} />
      </video>
    </Styles.Container>
  );
};

export default StreamingVideo;
