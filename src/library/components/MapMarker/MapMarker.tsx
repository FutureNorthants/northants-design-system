import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

/**
 * A Google Maps marker to be placed inside a Map component
 */
const MapMarker: React.FunctionComponent<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();
  const themeContext = useContext(ThemeContext);

  const icon: google.maps.Symbol = {
    path: 'M19.7,5.6c-0.1,0-0.5,0.1-0.9,0.1c-3.3,0.4-6.5,2-8.9,4.4c-2.6,2.6-4.2,5.9-4.6,9.6c-0.1,1,0,3.1,0.1,4.1c0.3,2.1,1.1,4.2,2.3,6.6c0.9,1.6,1.6,2.9,4.2,7c0.9,1.4,1.9,3.1,2.6,4.2c2.3,3.9,4.1,7.9,5.4,11.9c0.2,0.6,0.3,0.8,0.6,0.9c0.5,0.2,1.1,0.1,1.4-0.3c0.1-0.1,0.2-0.5,0.4-0.9c1.1-3.3,2.5-6.5,4.2-9.5c1.2-2.2,2-3.6,4.4-7.4c1.7-2.7,2.3-3.6,2.9-4.8c1.6-2.9,2.5-5.3,2.9-7.8c0.2-1,0.2-3.1,0.1-4.1c-0.2-1.5-0.5-3-1-4.2c-2.1-5.2-6.8-8.9-12.4-9.8C22.9,5.6,20.2,5.5,19.7,5.6z',
    fillColor: `${themeContext.theme_vars.colours.action_dark}`,
    fillOpacity: 1,
    anchor: new google.maps.Point(40, 60),
    labelOrigin: new google.maps.Point(21, 25),
  };

  const mergedOptions: google.maps.MarkerOptions = {
    ...options,
    anchorPoint: new google.maps.Point(-5, -40),
    icon: icon,
    label: {
      text: typeof options.label === 'string' ? options.label : options.label.text,
      color: 'white',
    },
    position: options.position,
    title: options.title,
  };

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const infoWindow = new google.maps.InfoWindow({
        content: `<strong>${options.title}</strong>`,
        ariaLabel: options.title,
      });
      marker.setOptions(mergedOptions);
      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map: options.map,
        });
      });
    }
  }, [marker, options]);

  return null;
};

export default MapMarker;
