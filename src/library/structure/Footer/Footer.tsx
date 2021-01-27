import React from "react";

import { FooterProps } from "./Footer.types";
import * as Styles from "./Footer.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Footer: React.FC<FooterProps> = ({ 
    footerLinksArray = null,
    year = "2020"
}) => {
    const themeContext = useContext(ThemeContext);

    return(
        <Styles.Container>
            <Styles.StyledMaxWidthContainer>
                {footerLinksArray &&
                    <Styles.FooterList>
                        {footerLinksArray.map((link) =>
                            <Styles.FooterListItem>
                                <Styles.FooterLink 
                                    key={link.title} 
                                    href={link.url} 
                                    title={"Go to " + link.title}
                                >
                                    {link.title}
                                </Styles.FooterLink>
                            </Styles.FooterListItem>
                        )}
                    </Styles.FooterList>
                }
                <Styles.FooterCopy>
                    {/* TODO add this back in once legal is sorted */}
                    {/* &copy;&nbsp; */}
                    {themeContext.full_name}
                    {/* &nbsp;{year} */}
                </Styles.FooterCopy>
            </Styles.StyledMaxWidthContainer>
        </Styles.Container>
    );
}

export default Footer;

