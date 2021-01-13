
import React from "react";

import { DownloadFileIconProps } from "./DownloadFileIcon.types";

const IconDownload: React.FC<DownloadFileIconProps> = ({ colourFill }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            viewBox="0 0 30 40"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={colourFill} fillRule="nonzero" transform="translate(-80 -1189)">
                    <g transform="translate(80 1189)">
                        <g>
                            <path d="M16.875 18.443a.937.937 0 00-.938-.938h-1.874a.937.937 0 00-.938.938v6.563H9.306c-.836 0-1.254 1.014-.66 1.603l5.65 5.607a1 1 0 001.408 0l5.65-5.607c.593-.589.176-1.603-.661-1.603h-3.818v-6.563zM28.893 7.655l-6.554-6.553A3.75 3.75 0 0019.691 0H3.75A3.762 3.762 0 000 3.757v32.494A3.75 3.75 0 003.75 40h22.495C28.315 40 30 38.32 30 36.25V10.31c0-.991-.404-1.952-1.107-2.655zm-8.897-3.593l5.945 5.943h-5.945V4.062zM26.25 36.25H3.75V3.757h12.497v8.123a1.87 1.87 0 001.875 1.875h8.128V36.25z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
} 


export default IconDownload;

