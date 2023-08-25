import React from 'react';

export interface MapProps {
  /**
   * Where to centre the map
   */
  center: google.maps.LatLngLiteral;

  /**
   * The zoom level
   */
  zoom: number;

  /**
   * Contents of the map
   */
  children: React.ReactNode;
}
