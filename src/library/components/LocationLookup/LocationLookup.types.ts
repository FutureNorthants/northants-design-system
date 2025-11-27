import { Dispatch, SetStateAction } from 'react';

export interface LocationLookupProps {
  /**
   * The optional title
   */
  title?: string | null;

  /**
   * The latitude prop
   */
  latitude?: string | null;

  /**
   * The function prop passed in to set the latitude
   */
  setLatitude?: Dispatch<SetStateAction<string | null>>;

  /**
   * The longitude prop
   */
  longitude?: string | null;

  /**
   * The function prop passed in to set the longitude
   */
  setLongitude?: Dispatch<SetStateAction<string | null>>;
}
