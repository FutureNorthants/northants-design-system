import React from "react";

import { FooterProps } from "./Footer.types";
import * as Styles from "./Footer.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Footer: React.FC<FooterProps> = ({ 
    footerLinksArray,
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
                                    key={link.url} 
                                    href={link.url} 
                                    title={"Go to " + link.title}
                                    target={link.isExternal ? "_blank" : "_self"}
                                >
                                    {link.title}
                                </Styles.FooterLink>
                            </Styles.FooterListItem>
                        )}
                    </Styles.FooterList>
                }
                <Styles.FooterCopy>
                    &copy;&nbsp;{themeContext.full_name}&nbsp;{year}
                </Styles.FooterCopy>
            </Styles.StyledMaxWidthContainer>
        </Styles.Container>
    );
}

export default Footer;

