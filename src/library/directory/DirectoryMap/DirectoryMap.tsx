import React from 'react';
import { DirectoryMapProps } from './DirectoryMap.types';
import * as Styles from './DirectoryMap.styles';
import { wereCookiesAccepted } from '../../helpers/cookies';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from '../../components/Map/Map';
import StaticMap from '../../components/StaticMap/StaticMap';
import MapMarker from '../../components/MapMarker/MapMarker';

const DirectoryMap: React.FunctionComponent<DirectoryMapProps> = ({ allowCookies, mapProps }) => {
  const cookiesAccepted: boolean = wereCookiesAccepted(allowCookies);
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
  const latLong = mapProps.centre.split(',');
  const center: google.maps.LatLngLiteral = {
    lat: parseFloat(latLong[0]),
    lng: parseFloat(latLong[1]),
  };

  return (
    <Styles.Container data-testid="DirectoryMap">
      {cookiesAccepted ? (
        <>
          <Wrapper apiKey={apiKey}>
            <Map center={center} zoom={mapProps.zoom ?? 14}>
              {mapProps.mapMarkers.map((marker) => (
                <MapMarker
                  position={{ lat: marker.lat, lng: marker.lng }}
                  label={marker.label}
                  title={marker.title ?? ''}
                />
              ))}
            </Map>
          </Wrapper>
        </>
      ) : (
        <StaticMap {...mapProps} />
      )}
    </Styles.Container>
  );
};

export default DirectoryMap;
