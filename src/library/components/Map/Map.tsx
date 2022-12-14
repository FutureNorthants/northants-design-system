import React from 'react';
import { MapProps } from './Map.types';
import * as Styles from './Map.styles';

/**
 * An interactive Google Map which can accept MapMarkers as children
 */
const Map: React.FunctionComponent<MapProps> = ({ center, zoom, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  return (
    <Styles.Container data-testid="Map">
      <div ref={ref} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </Styles.Container>
  );
};

export default Map;
