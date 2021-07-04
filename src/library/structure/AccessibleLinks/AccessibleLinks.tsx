import React from "react";
import { AccessibleLinkProps } from "./AccessibleLinks.types";
import * as Styles from "./AccessibleLinks.styles";

const AccessibleLink: React.FC<AccessibleLinkProps> = ({
    AccessibleLinksArray = null,
}) => 
{
    return (
      <div>
        {AccessibleLinksArray && AccessibleLinksArray.map((link, i) =>
            <Styles.AccessibleLinks 
                key={'accessible-link-'+i} 
                href={link.url}
            >
                {link.title}
            </Styles.AccessibleLinks>
            )
        }
        </div>
    );
}
        
export default AccessibleLink;
        
        