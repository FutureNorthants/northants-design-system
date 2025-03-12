export interface RoadworksListProps {
  /**
   * A list of roadworks
   */
  roadworks: Roadwork[];

  /**
   * The title tag
   */
  title: string;
}

export interface Roadwork {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The road name
   */
  location: string;

  /**
   * The detailed location
   */
  detailedLocation: string;

  /**
   * The optional latitude
   */
  latitude?: string;

  /**
   * The optional longitude
   */
  longitude?: string;

  /**
   * The start date and time of the roadworks
   */
  startTime: string;

  /**
   * The end date and time of the roadworks
   */
  endTime: string;

  /**
   * The description of the roadworks
   */
  description: string;

  /**
   * The traffic management information
   */
  trafficManagement: string;

  /**
   * The responsible organisation
   */
  responsibility: string;
}
