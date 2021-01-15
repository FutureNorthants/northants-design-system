import React from "react";

import { PhaseBannerProps } from "./PhaseBanner.types";
import * as Styles from "./PhaseBanner.styles";

const PhaseBanner: React.FC<PhaseBannerProps> = ({ }) => (
    <Styles.StyledMaxWidthContainer>
        {/* TODO add in link to feedback form */}
        <Styles.Phase>BETA</Styles.Phase> 
        <Styles.PhaseText>This is a new service - your feedback will help us to improve it.</Styles.PhaseText>
    </Styles.StyledMaxWidthContainer>
);

export default PhaseBanner;