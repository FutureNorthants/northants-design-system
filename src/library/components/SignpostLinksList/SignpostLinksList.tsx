
import React from "react";

import { SignpostLinksListProps } from "./SignpostLinksList.types";
import * as Styles from "./SignpostLinksList.styles";
import LinkIcon from '../../components/icons/LinkIcon/LinkIcon';


const SignpostLinksList: React.FC<SignpostLinksListProps> = ({ signpostLinksArray }) => (
    <Styles.SignpostList>
    {signpostLinksArray.map((link) =>
        <Styles.SignpostListItem>
            <Styles.SignpostLink href={link.url} title={"View more at " + link.areaName + " area"}>
                <Styles.IconWrapper>
                    <LinkIcon />
                </Styles.IconWrapper>
                {link.areaName}
            </Styles.SignpostLink>
        </Styles.SignpostListItem>
    )}   
</Styles.SignpostList>
);

export default SignpostLinksList;

