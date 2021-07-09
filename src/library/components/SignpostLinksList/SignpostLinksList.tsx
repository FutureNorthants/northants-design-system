
import React from "react";

import { SignpostLinksListProps } from "./SignpostLinksList.types";
import * as Styles from "./SignpostLinksList.styles";
import LinkIcon from '../../components/icons/LinkIcon/LinkIcon';


const SignpostLinksList: React.FC<SignpostLinksListProps> = ({ signpostLinksArray }) => (
    <Styles.SignpostList>
    {signpostLinksArray.map((link, i) =>
        <Styles.SignpostListItem key={i}>
            <Styles.SignpostLink href={link.url} title={link.areaName + " (this link will take you to an external website)"}>
                <Styles.IconWrapper>
                    <LinkIcon />
                </Styles.IconWrapper>
                {link.cta_text ? 
                    link.cta_text
                :
                    link.areaName
                }
            </Styles.SignpostLink>
        </Styles.SignpostListItem>
    )}   
</Styles.SignpostList>
);

export default SignpostLinksList;

