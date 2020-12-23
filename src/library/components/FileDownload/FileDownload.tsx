
import React, { useState } from "react";

import { FileDownloadProps } from "./FileDownload.types";
import * as Styles from "./FileDownload.styles";

import IconDownloadFile from '../../components/IconDownloadFile/IconDownloadFile';

const FileDownload: React.FC<FileDownloadProps> = ({
    title,
    type,
    url,
    size,
    ...props
  }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
      <Styles.Outer>
        <Styles.Link 
            href={url} 
            download
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

          {/* // @TODO either remove the need for theme props here or bring props in here */}
            <IconDownloadFile colourFill={isHovered ? '#666' : '#ccc'} />


            <Styles.FileDetails className="file-details">
                <Styles.Title className="file-title">{title}</Styles.Title>
                <Styles.Type>{type == "Microsoft Office - OOXML - Word Document" ? "Word Document" : type}</Styles.Type>
                <Styles.Size>{size}</Styles.Size>
            </Styles.FileDetails>
        </Styles.Link>
    </Styles.Outer>
    );
  };
  

export default FileDownload;

