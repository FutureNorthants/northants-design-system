import React from "react";
import { AccessibleLinkProps } from "./AccessibleLinks.types";
import * as Styles from "./AccessibleLinks.styles";

const AccessibleLink: React.FC<AccessibleLinkProps> = ({
    AccessibleLinksArray = null,
}) => 
{
    return (
      <>
        {AccessibleLinksArray && AccessibleLinksArray.map((link, i) =>
            <Styles.AccessibleLinks 
                key={'accessible-link-'+i} 
                href={link.url}
            >
                {link.title}
            </Styles.AccessibleLinks>
            )
        }
        </>
    );
}
        
export default AccessibleLink;
        
        