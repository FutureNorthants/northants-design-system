export interface FileDownloadProps {
  /**
   * The title of the file, not including the file extension
   **/
  title: string;

  /**
   * The type of file
   **/
  type: string;

  /**
   * A URL to download the file
   **/
  url: string;

  /**
   * The size of the file in KB or MB
   **/
  size: string;

  /**
   * Should the file be marked as archived
   */
  archived: boolean;
}
