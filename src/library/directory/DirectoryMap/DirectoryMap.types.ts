import { StaticMapProps } from '../../components/StaticMap/StaticMap.types';

export interface DirectoryMapProps {
  /**
   * Allow overriding if cookies are allowed (for stories).
   */
  allowCookies?: boolean;

  /**
   * Map settings
   */
  mapProps: StaticMapProps;
}
