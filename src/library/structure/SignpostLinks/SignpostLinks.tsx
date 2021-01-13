import React from "react";

import { SignpostLinksProps } from "./SignpostLinks.types";
import * as Styles from "./SignpostLinks.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PostCodeSearch from "../../components/PostCodeSearch/PostCodeSearch";
import LinkIcon from '../../components/icons/LinkIcon/LinkIcon';

const SignpostLinks: React.FC<SignpostLinksProps> = ({ 
    SignpostLinksArray,
    TopLineText = "Select your local area for more information:",
    OtherCouncilLink
}) => {
    const themeContext = useContext(ThemeContext);
    const councilLink = OtherCouncilLink ? OtherCouncilLink : themeContext.theme_vars.other_council_link;
    
    return(
        <Styles.Container>
            <Styles.Paragraph>{TopLineText}</Styles.Paragraph>

            <Styles.SignpostList>
                {SignpostLinksArray.map((link) =>
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
            
            {/* TODO: add functionality to postcode checker */}
            <PostCodeSearch />

            {(OtherCouncilLink || themeContext.theme_vars.other_council_link) &&
                <Styles.Paragraph>
                    If your area isn't listed, you may be a resident of&nbsp;
                    <Styles.SignpostLink href={councilLink} title={"Go to " + themeContext.theme_vars.other_council_name}>
                        {themeContext.theme_vars.other_council_name}
                    </Styles.SignpostLink>
                </Styles.Paragraph>
            }
        </Styles.Container>
    )
};

export default SignpostLinks;

