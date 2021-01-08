import { FileDownloadProps } from '../../components/FileDownload/FileDownload.types';

export interface DownloadableFilesProps {
  /**
   * An array of downloadable files
   */
  files: Array<FileDownloadProps>;
}
