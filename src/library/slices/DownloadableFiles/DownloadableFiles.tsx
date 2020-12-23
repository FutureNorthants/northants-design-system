
import React from "react";

import { DownloadableFilesProps } from "./DownloadableFiles.types";
import * as Styles from "./DownloadableFiles.styles";

import FileDownload from '../../components/FileDownload/FileDownload';

const DownloadableFiles: React.FC<DownloadableFilesProps> = ({ files }) => (
    <Styles.Container data-testid="DownloadableFiles">
        {files.length > 0 ?
            files.map(file => <FileDownload key={file.title} {...file}/>)
            :
            <i>No file to show</i>
        }
    </Styles.Container>
);
 
export default DownloadableFiles;
