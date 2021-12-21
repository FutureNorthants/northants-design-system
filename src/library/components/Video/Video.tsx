import React, { useEffect, useState } from 'react';
import { VideoProps, VideoProvider } from './Video.types';
import * as Styles from './Video.styles';
import { cookieName, getCookie } from '../../structure/CookieBanner/CookieHelpers';
import Button from '../Button/Button';

/**
 * A responsive video embed for YouTube or Vimeo
 */
const Video: React.FunctionComponent<VideoProps> = ({
  video_id,
  provider,
  description,
  allowCookies = false,
  ...props
}) => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(allowCookies);
  const [watchLink, setWatchLink] = useState<string>('');

  const defineWatchLink = () => {
    if (provider == VideoProvider.YouTube) {
      setWatchLink(`https://www.youtube.com/watch?v=${video_id}`);
    }

    if (provider == VideoProvider.Vimeo) {
      setWatchLink(`https://vimeo.com/${video_id}`);
    }
  };

  const checkCookie = () => {
    const myCookie = getCookie(cookieName);

    if (myCookie !== null) {
      setCookiesAccepted(myCookie.includes('"cookiesAccepted":true'));
    }
  };

  useEffect(() => {
    defineWatchLink();
    checkCookie();
  });

  return (
    <>
      {provider == VideoProvider.YouTube && cookiesAccepted && (
        <Styles.VideoContainer data-testid="Video">
          <iframe
            src={`https://www.youtube.com/embed/${video_id}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          ></iframe>
        </Styles.VideoContainer>
      )}
      {provider == VideoProvider.Vimeo && cookiesAccepted && (
        <Styles.VideoContainer data-testid="Video">
          <iframe
            src={`https://player.vimeo.com/video/${video_id}`}
            allow="autoplay; fullscreen; picture-in-picture; fullscreen"
          ></iframe>
        </Styles.VideoContainer>
      )}
      {!cookiesAccepted && (
        <Styles.VideoLink href={watchLink} title={description}>
          {description}
        </Styles.VideoLink>
      )}
    </>
  );
};

export default Video;
