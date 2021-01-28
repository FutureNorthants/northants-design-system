import React from "react";

import { SignpostLinksProps } from "./SignpostLinks.types";
import * as Styles from "./SignpostLinks.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PostCodeSearch from "../../components/PostCodeSearch/PostCodeSearch";
import LinkIcon from '../../components/icons/LinkIcon/LinkIcon';

const SignpostLinks: React.FC<SignpostLinksProps> = ({ 
    signpostLinksArray,
    TopLineText = "Select your local area for more information:",
    otherCouncilLink
}) => {
    const themeContext = useContext(ThemeContext);
    const councilLink = otherCouncilLink ? otherCouncilLink : themeContext.theme_vars.other_council_link;
    
    return(
        <Styles.Container>
            <Styles.Paragraph>{TopLineText}</Styles.Paragraph>

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
            
            <PostCodeSearch otherCouncilLink={councilLink} signPostLinks={signpostLinksArray} />

            {(otherCouncilLink || themeContext.theme_vars.other_council_link) &&
                <Styles.LastParagraph>
                    If your area isn't listed, you may be a resident of&nbsp;
                    <Styles.SignpostLink href={councilLink} title={"Go to " + themeContext.theme_vars.other_council_name}>
                        {themeContext.theme_vars.other_council_name}
                    </Styles.SignpostLink>
                </Styles.LastParagraph>
            }
        </Styles.Container>
    )
};

export default SignpostLinks;

