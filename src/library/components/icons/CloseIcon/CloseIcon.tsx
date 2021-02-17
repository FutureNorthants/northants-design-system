
import React from "react";

import { CloseIconProps } from "./CloseIcon.types";

const IconDownload: React.FC<CloseIconProps> = ({ colourFill }) => {

    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0539 1.33944C11.3142 0.599744 10.1149 0.599744 9.37521 1.33944L6.69648 4.01817L4.01791 1.3396C3.27821 0.5999 2.07893 0.5999 1.33923 1.3396C0.599539 2.07929 0.599539 3.27857 1.33923 4.01827L4.01781 6.69684L1.3392 9.37545C0.5995 10.1151 0.5995 11.3144 1.33919 12.0541C2.07889 12.7938 3.27817 12.7938 4.01787 12.0541L6.69648 9.37551L9.37525 12.0543C10.1149 12.794 11.3142 12.794 12.0539 12.0543C12.7936 11.3146 12.7936 10.1153 12.0539 9.37561L9.37515 6.69684L12.0539 4.01811C12.7936 3.27842 12.7936 2.07913 12.0539 1.33944Z" fill={colourFill} />
        </svg>
    )
} 


export default IconDownload;

