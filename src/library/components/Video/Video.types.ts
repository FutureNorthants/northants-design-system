export interface VideoProps {
  /**
   * The unique video id
   */
  video_id: string;

  /**
   * The video streaming provider
   */
  provider: VideoProvider;
}

export enum VideoProvider {
  YouTube = 'YouTube',
  Vimeo = 'Vimeo',
}
