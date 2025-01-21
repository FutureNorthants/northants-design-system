import React, { useEffect, useState } from 'react';
import { GoogleMapProps } from './GoogleMap.types';
import * as Styles from './GoogleMap.styles';
import { wereCookiesAccepted } from '../../helpers/cookies';
import Heading from '../../components/Heading/Heading';
import AlertBannerService from '../../structure/AlertBannerService/AlertBannerService';
import sanitizeHtml from 'sanitize-html';

/**
 * A responsive Google Maps embed
 */
const GoogleMap: React.FunctionComponent<GoogleMapProps> = ({
  title,
  description,
  iframe_html,
  link_title,
  link_url,
  allowCookies,
}) => {
  const cookiesAccepted: boolean = wereCookiesAccepted(allowCookies);
  const [notServer, setNotServer] = useState(false);

  /* We extract the iframe source URL and check it actually goes to www.google.com/maps or one.network*/
  const src_matches = iframe_html.match(/src="([^"]+)"/gi);
  let embed_url = src_matches?.length == 1 ? src_matches[0].replace('src="', '').replace('"', '') : '';
  if (embed_url) {
    const acceptable_embedded_url_matches = embed_url.match(
      /^https:\/\/www.google.com\/maps|https:\/\/api-gb\.one\.network\/embedded\/\?options=%7B%22organisationID%22%3A2247%2C%22embedded%22%3Atrue/gi
    );

    embed_url = acceptable_embedded_url_matches?.length == 1 ? embed_url : '';
  }

  /* We also check the non-embed link goes to goo.gl/maps or www.google.com/maps or one.network*/
  if (link_url) {
    const acceptable_non_embedded_url_matches = link_url.match(
      /^https:\/\/goo.gl\/maps|https:\/\/www.google.com\/maps|https:\/\/maps.app.goo.gl|https:\/\/one.network/gi
    );
    link_url = acceptable_non_embedded_url_matches?.length == 1 ? link_url : '';
  }

  useEffect(() => {
    setNotServer(true);
  }, []);

  return (
    <>
      <Styles.ProtectiveContainer>
        {title && <Heading level={3} text={title} />}
        {description && (
          <Styles.MapDescription
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description),
            }}
          />
        )}
        {(!link_url || !embed_url) && (
          <AlertBannerService alertType={'warning'} title={'Invalid map'}>
            Embedded map contains invalid {!link_url && 'link'}
            {!link_url && !embed_url && ' and '}
            {!embed_url && 'iframe data'}; please report this to the content editor
          </AlertBannerService>
        )}
        {cookiesAccepted && embed_url && notServer && (
          <Styles.MapEmbed data-testid="GoogleMapContainer">
            <Styles.MapEmbedIFrame
              src={embed_url}
              data-testid="GoogleMapIframe"
              title={title ? title : 'Embedded map'}
              aria-hidden="true"
            />
          </Styles.MapEmbed>
        )}
        {cookiesAccepted &&
          link_url &&
          notServer && ( // visually hidden link for screen readers etc. as the embed isn't very accessible so hidden from them
            <Styles.ProtectiveContainer>
              <Styles.AccessibleMapLink href={link_url}>
                {link_title ? link_title : 'Google Maps link'}
              </Styles.AccessibleMapLink>
            </Styles.ProtectiveContainer>
          )}
        {!cookiesAccepted &&
          link_url &&
          notServer && ( // visible link for all if cookies not accepted
            <Styles.MapLink href={link_url}>{link_title ? link_title : 'Google Maps link'}</Styles.MapLink>
          )}
      </Styles.ProtectiveContainer>
    </>
  );
};

export default GoogleMap;
