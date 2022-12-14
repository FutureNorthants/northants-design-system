export interface StaticMapProps {
  /**
   *  Where to centre the map, in the format lat,lng
   */
  centre: string;

  /**
   * The alt text for the static map image
   */
  imageAltText: string;

  /**
   * The type of map
   */
  mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';

  /**
   * An array of map markers
   */
  mapMarkers?: MapMarkerProps[];

  /**
   * The size of the map in the format wxh, such as 640x320
   */
  size?: string;

  /**
   * The optional zoom level, between 1 and 20. 1 = world, 20 = buildings
   */
  zoom?: number;
}

export interface MapMarkerProps {
  /**
   * Optional marker colour. Default is red
   */
  colour?: 'black' | 'brown' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'red' | 'white';

  /**
   * Optional label. Single character only A-Z, 0-9
   */
  label?: string;

  /**
   * The latitude
   */
  lat: number;

  /**
   * The longitude
   */
  lng: number;

  /**
   * Optional marker size. Default is normal
   */
  size?: 'tiny' | 'mid' | 'small' | 'normal';

  /**
   * Optional marker title
   */
  title?: string;
}
