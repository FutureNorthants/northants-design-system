export interface RoadworksListProps {
  /**
   * A list of roadworks
   */
  roadworks: Roadwork[];
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
  latitude?: number;

  /**
   * The optional longitude
   */
  longitude?: number;

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
