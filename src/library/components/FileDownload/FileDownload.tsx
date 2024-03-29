import React, { useState } from 'react';
import { FileDownloadProps } from './FileDownload.types';
import * as Styles from './FileDownload.styles';
import DownloadFileIcon from '../../components/icons/DownloadFileIcon/DownloadFileIcon';

/**
 * A styled file download link
 */
const FileDownload: React.FunctionComponent<FileDownloadProps> = ({
  title,
  type,
  url,
  size,
  archived = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Styles.Outer data-testid="FileDownload">
      <Styles.Link
        href={url}
        download
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        rel={archived ? 'archived' : ''}
      >
        {/* // @TODO either remove the need for theme props here or bring props in here */}
        <DownloadFileIcon />
        {/* TODO: add in different icons for different types */}

        <Styles.FileDetails className="file-details">
          <Styles.Title className="file-title">{title}</Styles.Title>
          <Styles.Type>
            {type == 'Microsoft Office - OOXML - Word Document'
              ? 'Word Document'
              : type == 'Adobe Portable Document Format' || type == 'application/pdf'
              ? 'PDF'
              : type}
          </Styles.Type>
          <Styles.Size>{size}</Styles.Size>
        </Styles.FileDetails>
      </Styles.Link>
    </Styles.Outer>
  );
};

export default FileDownload;
