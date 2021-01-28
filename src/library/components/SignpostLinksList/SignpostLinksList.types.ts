
export interface SignpostLinksListProps {
  /**
   * An array of the SignpostLinks
   */
  signpostLinksArray: Array<SignpostLinkProp>;
}

export interface SignpostLinkProp {
  /**
  * The number that represents the local area - based on the list of all local areas in alphabetical order
  */
  sovereignCode: number;
  /**
  * The name of the local area
  */
  areaName: string;
  /**
  * URL of this service on the local area's website
  */
  url: string;
}