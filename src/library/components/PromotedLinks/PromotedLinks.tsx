
import React from "react";

import { PromotedLinksProps } from "./PromotedLinks.types";
import * as Styles from "./PromotedLinks.styles";

const PromotedLinks: React.FC<PromotedLinksProps> = ({ promotedLinksArray, oneCol }) => { 
    if(promotedLinksArray.length > 0){
        return (
            <Styles.PromotedLinks data-testid="PromotedLinks" oneCol={oneCol} >
            {promotedLinksArray.map((link, i) =>
                <Styles.PromotedLink key={i} oneCol={oneCol} href={link.url} title={link.title}>
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
        
            