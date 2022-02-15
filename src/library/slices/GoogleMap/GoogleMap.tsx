import React from 'react';
import { GoogleMapProps } from './GoogleMap.types';
import * as Styles from './GoogleMap.styles';
import { wereCookiesAccepted } from '../../structure/CookieBanner/CookieHelpers';
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

  /* We extract the iframe source URL and check it actually goes to www.google.com/maps */
  const src_matches = iframe_html.match(/(?<=src=").*?(?=["])/gi);
  let embed_url = src_matches?.length == 1 ? src_matches[0] : '';
  if (embed_url) {
    const map_matches = embed_url.match(/^https:\/\/www.google.com\/maps/gi);
    embed_url = map_matches?.length == 1 ? embed_url : '';
  }

  /* We also check the non-embed link goes to goo.gl/maps or www.google.com/maps */
  if (link_url) {
    const googl_matches = link_url.match(/^https:\/\/goo.gl\/maps|https:\/\/www.google.com\/maps/gi);
    link_url = googl_matches?.length == 1 ? link_url : '';
  }

  return (
    <>
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
      {cookiesAccepted && embed_url && (
        <Styles.MapEmbed data-testid="GoogleMapContainer">
          <Styles.MapEmbedIFrame src={embed_url} allow="fullscreen" data-testid="GoogleMapIframe" />
        </Styles.MapEmbed>
      )}
      {!cookiesAccepted && link_url && (
        <Styles.MapLink href={link_url} data-testid="GoogleMapLink">
          {link_title ? link_title : 'Google Maps link'}
        </Styles.MapLink>
      )}
    </>
  );
};

export default GoogleMap;
