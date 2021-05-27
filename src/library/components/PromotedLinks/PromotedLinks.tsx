
import React from "react";

import { PromotedLinksProps } from "./PromotedLinks.types";
import * as Styles from "./PromotedLinks.styles";

const PromotedLinks: React.FC<PromotedLinksProps> = ({ promotedLinksArray }) => { 
    if(promotedLinksArray.length > 0){
        return (
            <Styles.PromotedLinks data-testid="PromotedLinks">
            {promotedLinksArray.map((link) =>
                <Styles.PromotedLink href={link.url} title={"Go to " + link.title}>
                <span>{link.title}</span>
                </Styles.PromotedLink>
                )}
                </Styles.PromotedLinks>
                )
            }else{
                return null;
            }

        };
        
        export default PromotedLinks;
        
            