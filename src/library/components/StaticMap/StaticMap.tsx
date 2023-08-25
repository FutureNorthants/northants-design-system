import React from 'react';
import { StaticMapProps } from './StaticMap.types';
import * as Styles from './StaticMap.styles';

/**
 * A static Google map with optional markers
 */
const StaticMap: React.FunctionComponent<StaticMapProps> = ({
  centre,
  imageAltText,
  mapMarkers = [],
  mapType = 'roadmap',
  size = '640x320',
  zoom = 14,
}) => {
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  const markerPath = mapMarkers
    .map((mapMarker) => {
      const size = mapMarker.size ?? 'normal';
      const colour = mapMarker.colour ?? 'red';
      const label = mapMarker.label ? `%7Clabel:${mapMarker.label}` : '';

      return `&markers=size:${size}%7Ccolor:${colour}${label}%7C${mapMarker.lat},${mapMarker.lng}`;
    })
    .join('');

  return (
    <Styles.Container data-testid="StaticMap">
      <Styles.Message>
        <span>To interact with the map, you need to accept cookies.</span>
      </Styles.Message>
      <Styles.MapImage
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${centre}&size=${size}&zoom=${zoom}&maptype=${mapType}${markerPath}&key=${apiKey}`}
        alt={imageAltText}
      />
    </Styles.Container>
  );
};

export default StaticMap;
