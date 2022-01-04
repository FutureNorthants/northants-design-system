export interface VideoProps {
  /**
   * The unique video id
   */
  video_id: string;

  /**
   * The video streaming provider
   */
  provider: VideoProvider;

  /**
   * The description link text displayed when cookies are disabled
   */
  description: string;

  /**
   * Allow overriding if cookies are allowed
   */
  allowCookies?: boolean;
}

export enum VideoProvider {
  YouTube = 'YouTube',
  Vimeo = 'Vimeo',
}
