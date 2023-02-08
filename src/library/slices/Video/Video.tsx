import React, { useEffect, useState } from 'react';
import { VideoProps, VideoProvider } from './Video.types';
import * as Styles from './Video.styles';
import { wereCookiesAccepted } from './../../helpers/cookies';

/**
 * A responsive video embed for YouTube or Vimeo
 */
const Video: React.FunctionComponent<VideoProps> = ({ video_id, provider, description, allowCookies, ...props }) => {
  const cookiesAccepted: boolean = wereCookiesAccepted(allowCookies);
  const [notServer, setNotServer] = useState(false);
  let watchLink: string;
  let embedLink: string;

  const defineLinks = () => {
    if (provider == VideoProvider.YouTube) {
      watchLink = `https://www.youtube.com/watch?v=${video_id}`;
      embedLink = `https://www.youtube.com/embed/${video_id}?rel=0`;
    }

    if (provider == VideoProvider.Vimeo) {
      watchLink = `https://vimeo.com/${video_id}`;
      embedLink = `https://player.vimeo.com/video/${video_id}`;
    }
  };

  defineLinks();

  useEffect(() => {
    setNotServer(true);
  }, []);

  return (
    <>
      {cookiesAccepted && notServer ? (
        <Styles.VideoContainer data-testid="Video">
          <iframe
            src={embedLink}
            title={description}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            data-testid="VideoIframe"
          ></iframe>
        </Styles.VideoContainer>
      ) : (
        <Styles.VideoLink href={watchLink} title={description} data-testid="VideoLink">
          {description}
        </Styles.VideoLink>
      )}
    </>
  );
};

export default Video;
