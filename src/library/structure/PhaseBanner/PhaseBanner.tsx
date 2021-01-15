import React from "react";

import { PhaseBannerProps } from "./PhaseBanner.types";
import * as Styles from "./PhaseBanner.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PhaseBanner: React.FC<PhaseBannerProps> = () => {
    const themeContext = useContext(ThemeContext);
    
    return(
        <Styles.StyledMaxWidthContainer>
            <Styles.Phase>BETA</Styles.Phase> 
            <Styles.PhaseText>
                This is a new website - your&nbsp;
                <a href={
                    themeContext.cardinal_name === "west" ? "https://northamptonshire-self.achieveservice.com/service/West_Northamptonshire_Beta_website_comment_form" : 
                    themeContext.cardinal_name === "north" ? "http://northamptonshire-self.achieveservice.com/service/North_Northamptonshire_Beta_website_feedback_form" : "#"
                 } target="_blank" title="Give us feedback">feedback</a> 
                &nbsp;will help us to improve it.
            </Styles.PhaseText>
        </Styles.StyledMaxWidthContainer>
    );
}

export default PhaseBanner;