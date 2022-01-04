import React, { useEffect, useState } from 'react';
import { VideoProps, VideoProvider } from './Video.types';
import * as Styles from './Video.styles';
import { cookieName, getCookie } from '../../structure/CookieBanner/CookieHelpers';

/**
 * A responsive video embed for YouTube or Vimeo
 */
const Video: React.FunctionComponent<VideoProps> = ({ video_id, provider, description, allowCookies, ...props }) => {
  let cookiesAccepted: boolean = allowCookies;
  let watchLink: string;
  let embedLink: string;

  const checkCookie = () => {
    const myCookie = getCookie(cookieName);

    if (myCookie !== null && allowCookies == null) {
      cookiesAccepted = myCookie.includes('"cookiesAccepted":true');
    }
  };

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

  checkCookie();
  defineLinks();

  return (
    <>
      {cookiesAccepted && (
        <Styles.VideoContainer data-testid="Video">
          <iframe
            src={embedLink}
            title={description}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            data-testid="VideoIframe"
          ></iframe>
        </Styles.VideoContainer>
      )}
      {!cookiesAccepted && (
        <Styles.VideoLink href={watchLink} title={description} data-testid="VideoLink">
          {description}
        </Styles.VideoLink>
      )}
    </>
  );
};

export default Video;
