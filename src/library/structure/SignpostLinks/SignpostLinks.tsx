import React from "react";

import { SignpostLinksProps } from "./SignpostLinks.types";
import * as Styles from "./SignpostLinks.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const SignpostLinks: React.FC<SignpostLinksProps> = ({ 
    SignpostLinksArray,
    TopLineText = "Select your local area for more information:",
    OtherCouncilLink
}) => {
    const themeContext = useContext(ThemeContext);
    const councilLink = OtherCouncilLink ? OtherCouncilLink : themeContext.theme_vars.council_link;
    
    return(
        <Styles.Container>
            <Styles.Paragraph>{TopLineText}</Styles.Paragraph>

            <Styles.SignpostList>
                {SignpostLinksArray.map((link) =>
                    <Styles.SignpostListItem>
                        {/* TODO: add icons to links */}
                        <Styles.SignpostLink href={link.url} title={"View more at " + link.areaName + " area"}>{link.areaName}</Styles.SignpostLink>
                    </Styles.SignpostListItem>
                )}   
            </Styles.SignpostList>
            
            {/* TODO: add postcode checker if event included */}

            {(OtherCouncilLink || themeContext.theme_vars.council_link) &&
                <Styles.Paragraph>
                    Are you a resident of&nbsp;
                    <Styles.SignpostLink href={councilLink} title={"Go to " + themeContext.full_name}>
                        {themeContext.full_name}
                    </Styles.SignpostLink>
                    ?
                </Styles.Paragraph>
            }
        </Styles.Container>
    )
};

export default SignpostLinks;

