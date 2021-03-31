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
                    <Styles.Phase isHome={isHome}>New website</Styles.Phase> 
                </Styles.PhaseContainer>
                <Styles.PhaseText>
                    This site is new and we are improving it every day.
                </Styles.PhaseText>
            </Styles.StyledMaxWidthContainer>
        </Styles.Wrapper>
    );
}

export default PhaseBanner;