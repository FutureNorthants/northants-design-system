import React from "react";

import { PhaseBannerProps } from "./PhaseBanner.types";
import * as Styles from "./PhaseBanner.styles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PhaseBanner: React.FC<PhaseBannerProps> = ({isHome = false}) => {
    const themeContext = useContext(ThemeContext);
    
    return(
        <Styles.Wrapper isHome={isHome}>
            <Styles.StyledMaxWidthContainer noPadding noBackground isHome={isHome}>
                <Styles.PhaseContainer>
                    <Styles.Phase isHome={isHome}>BETA</Styles.Phase> 
                </Styles.PhaseContainer>
                <Styles.PhaseText>
                    This website is currently in development, launching on 1 April 2021
                </Styles.PhaseText>
            </Styles.StyledMaxWidthContainer>
        </Styles.Wrapper>
    );
}

export default PhaseBanner;